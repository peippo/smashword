import { writable } from "svelte/store";
import { allCharTypes } from "./utils/utils";

export const characterCount = writable(10);
export const maxLength = writable(16);
export const selectedTypes = writable([...allCharTypes]);
