import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { States } from '../states'

interface BearState {
	index: number
	increaseIndex: () => void
	decreaseIndex: () => void
	setIndex: (newIndex: number) => void
	resetIndex: () => void
}

export const useBearStore = create<BearState>()(
	devtools(
		persist(
			(set) => ({
				index: 0,
				increaseIndex: () =>
					set((state) => {
						const numberOfStates = States.length

						if (state.index === numberOfStates) {
							return { index: state.index }
						}

						return { index: state.index + 1 }
					}),
				decreaseIndex: () =>
					set((state) => {
						if (state.index === 0) {
							return { index: state.index }
						}

						return { index: state.index - 1 }
					}),
				setIndex: (newIndex) => set(() => ({ index: newIndex })),
				resetIndex: () => set(() => ({ index: 0 })),
			}),
			{
				name: 'bear-storage',
			}
		)
	)
)
