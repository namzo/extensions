import { Tool } from "@raycast/api";
import { stopFocus } from "../utils";

/**
 * Stops the currently active focus session in the Focus app.
 */
export default async function tool() {
  await stopFocus();
  return "Focus session stopped.";
}

export const confirmation: Tool.Confirmation<Record<string, never>> = async () => ({
  message: "Are you sure you want to stop the current focus session?",
});
