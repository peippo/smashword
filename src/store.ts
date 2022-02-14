import { writable, Writable } from "svelte/store";
import { allCharTypes } from "./utils/utils";

export const characterCount: Writable<number> = writable(0);
export const maxLength: Writable<number> = writable(16);
export const currentPassword: Writable<string> = writable("");
export const selectedTypes: Writable<string[]> = writable([...allCharTypes]);
export const isNarrowScreen: Writable<boolean> = writable(false);
