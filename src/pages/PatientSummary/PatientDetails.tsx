import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs.tsx";
import { Patient } from "fhir/r4";
import PatientProfile from "@/pages/PatientSummary/PatientTabs/PatientProfile.tsx";
import PatientProfileLoading from "@/pages/PatientSummary/PatientTabs/PatientProfileLoading.tsx";
import PatientConditions from "@/pages/PatientSummary/PatientTabs/PatientConditions.tsx";

interface PatientDetailsProps {
  patient: Patient | null;
}

function PatientDetails(props: PatientDetailsProps) {
  const { patient } = props;

  return (
    <main className="grid flex-1 items-start gap-4 sm:py-0 md:gap-8">
      <Tabs defaultValue="profile">
        <div className="flex items-center">
          <TabsList>
            <TabsTrigger value="profile" disabled={!patient}>
              Profile
            </TabsTrigger>
            <TabsTrigger value="conditions" disabled={!patient}>
              Conditions
            </TabsTrigger>
            <TabsTrigger value="medications" disabled={!patient}>
              Medications
            </TabsTrigger>
            <TabsTrigger value="allergies" disabled={!patient}>
              Allergies
            </TabsTrigger>
            <TabsTrigger value="procedures" disabled={!patient}>
              Procedures
            </TabsTrigger>
            <TabsTrigger value="immunisations" disabled={!patient}>
              Immunisations
            </TabsTrigger>
          </TabsList>
        </div>
        {patient && patient.id ? (
          <>
            <TabsContent value="profile">
              <PatientProfile patient={patient} />
            </TabsContent>
            <TabsContent value="conditions">
              <PatientConditions patientId={patient.id} />
            </TabsContent>
          </>
        ) : (
          <PatientProfileLoading />
        )}
      </Tabs>
    </main>
  );
}

export default PatientDetails;
