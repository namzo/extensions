import { getActiveProfileName, isBreakRunning, isFocusRunning, getProfileNames } from "../utils";

/**
 * Returns the current status of the Focus app: whether a focus session or break is active,
 * the active profile name, and all available profiles.
 */
export default async function tool() {
  const [focusing, onBreak, activeProfile, profiles] = await Promise.all([
    isFocusRunning(),
    isBreakRunning(),
    getActiveProfileName(),
    getProfileNames(),
  ]);

  return {
    isFocusing: focusing,
    isOnBreak: onBreak,
    activeProfile: activeProfile || null,
    availableProfiles: profiles,
  };
}
