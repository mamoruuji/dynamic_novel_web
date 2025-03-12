import { atom } from 'jotai'
import { atomFamily } from 'jotai/utils'

export const deleteDialogStateAtom = atom(false)

export const deleteTargetAtom = atom(null)

export const updateSectionTargetAtom = atom(null)

export const imageDialogStateAtom = atom(false)

export const tagDialogStateAtom = atom(false)

export const sectionDialogStateAtom = atom(false)

export const radioAnimationTriggerAtomFamily = atomFamily((value) =>
  atom(false),
)
