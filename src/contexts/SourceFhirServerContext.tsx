import { createContext, ReactNode, useState } from "react";

interface SourceFhirServerContextType {
  serverUrl: string;
  isModified: boolean;
  setServerUrl: (newServerUrl: string) => unknown;
  setIsModified: (isModified: boolean) => unknown;
}

export const SourceFhirServerContext =
  createContext<SourceFhirServerContextType>({
    serverUrl: "",
    isModified: false,
    setServerUrl: () => void 0,
    setIsModified: () => void 0,
  });

// props types for provider
type ProviderProps = {
  fhirServerUrl: string;
  children: ReactNode;
};

const SourceFhirServerContextProvider = ({ fhirServerUrl, children }: ProviderProps) => {
  const [serverUrl, setServerUrl] = useState(fhirServerUrl);
  const [isModified, setIsModified] = useState(false);

  return (
    <SourceFhirServerContext.Provider
      value={{ serverUrl, isModified, setServerUrl, setIsModified }}
    >
      {children}
    </SourceFhirServerContext.Provider>
  );
};

export default SourceFhirServerContextProvider;
