import { settingsMenuItems } from "@/utils/settingsMenuItem.tsx";
import MenuLink from "@/components/MenuLink.tsx";
import EncounterMenuLink from "@/components/EncounterMenuLink.tsx";

function SettingsMenu() {
  return (
    <nav className="grid gap-4">
      {settingsMenuItems.map(({ title, path }) =>
        title === "Encounter" ? (
          <EncounterMenuLink key={path} title={title} path={path} />
        ) : (
          <MenuLink key={path} title={title} path={path} />
        )
      )}
    </nav>
  );
}

export default SettingsMenu;
