/*
 * Copyright 2024 Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Source FHIR server
export const FHIR_SERVER_URL =
  import.meta.env.VITE_FHIR_SERVER_URL ??
  "https://proxy.smartforms.io/v/r4/fhir";

export const SECONDARY_FHIR_SERVER_URL =
  import.meta.env.VITE_SECONDARY_FHIR_SERVER_URL ??
  "";

// Determine if authorization is required
export const AUTH_REQUIRED = import.meta.env.VITE_AUTH_REQUIRED === "true";
export const AUTH_REQUIRED_SECONDARY = import.meta.env.VITE_AUTH_REQUIRED_SECONDARY === "true";

// Launch parameter configuration
export const LAUNCH_PARAM_CONFIG =
  import.meta.env.VITE_LAUNCH_PARAM_CONFIG ?? "proxy";

// OAuth configuration - only authorization_code is implemented
// If our server doesn't support authorization_code and you want to use your oauth mechanism, you can write your own Auth component and put it in src/layout/Home.tsx
// You are free to define your own environment variables for your oauth configuration. Remember to update vite-env.d.ts and globals.ts for Typescript types
export const OAUTH = {
  grantType: import.meta.env.VITE_OAUTH_GRANT_TYPE ?? "",
  scope: import.meta.env.VITE_OAUTH_SCOPE ?? "",
  clientId: import.meta.env.VITE_OAUTH_CLIENT_ID ?? ""
}
export const OAUTH_SECONDARY = {
  grantType: import.meta.env.VITE_OAUTH_GRANT_TYPE_SECONDARY ?? "",
  scope: import.meta.env.VITE_OAUTH_SCOPE_SECONDARY ?? "",
  clientId: import.meta.env.VITE_OAUTH_CLIENT_ID_SECONDARY ?? ""
}

// Questionnaire repository configuration (optional, mainly used for launching Smart Forms)
export const FORMS_SERVER_URL =
  import.meta.env.VITE_FORMS_SERVER_URL ??
  "https://smartforms.csiro.au/api/fhir";
export const FORMS_SERVER_TOKEN = import.meta.env.VITE_FORMS_SERVER_TOKEN ?? "";
