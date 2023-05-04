import { Typography } from "@mui/material";
import { Patient } from "fhir/r4";
import {
  getFhirServerBaseUrl,
  humanName,
  QUERY_HEADERS,
} from "../../lib/utils.ts";
import { PatientListItem } from "../Configuration/PatientTable.tsx";
import { useContext } from "react";
import { TokenContext } from "../../contexts/TokenContext.tsx";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Props {
  selectedPatient: PatientListItem | null;
}

function PatientDetails(props: Props) {
  const { selectedPatient } = props;

  const patientId = selectedPatient?.id;

  const { token } = useContext(TokenContext);

  const {
    data: patient,
    error,
    isLoading,
  } = useQuery<Patient>(
    ["patientDetails"],
    () =>
      axios(
        getFhirServerBaseUrl() + `/AllergyIntolerance?patient=${patientId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            ...QUERY_HEADERS,
          },
        }
      ).then((res) => res.data),
    {
      enabled: typeof patientId === "string" && !!token,
    }
  );

  if (error || !patientId) {
    return <Typography>No patient selected</Typography>;
  }

  if (isLoading || !patient) {
    return <Typography>Fetching patient...</Typography>;
  }

  return (
    <>
      <Typography>{humanName(patient)}</Typography>
      <Typography fontSize={10}>
        <pre>{JSON.stringify(patient, null, 2)}</pre>
      </Typography>
    </>
  );
}

export default PatientDetails;
