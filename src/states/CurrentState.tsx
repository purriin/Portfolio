import React, { useEffect } from 'react'
import { useBearStore } from '../hooks/useBearStore'
import { Home } from './Home'
import { States } from '.'

export const CurrentState: React.FC = () => {
	const bear = useBearStore()

	useEffect(() => {
		bear.resetIndex()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [bear.resetIndex])

	if (!bear) {
		return <Home />
	}

	const StateComponent = States[bear.index].component
	return StateComponent ? <StateComponent /> : <Home />
}
