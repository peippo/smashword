import { writable } from "svelte/store";
import { allCharTypes } from "./utils/utils";

export const characterCount = writable(0);
export const maxLength = writable(16);
export const currentPassword = writable("");
export const selectedTypes = writable([...allCharTypes]);
