import { createContext, useContext } from 'react'
import { [FTName]ControllerContext } from './[FTName]Controller'
import { [FTName]Presenter } from './[FTName]Presenter'

type [FTName]Props = {}

export const [FTName]Context = createContext<[FTName]Props>({})

export const [FTName]: React.FC<[FTName]Props> = (props) => {
  const [FTName]Controller = useContext([FTName]ControllerContext)

  return (
    <[FTName]Context.Provider value={props}>
      <[FTName]Controller
        render={(presenterProps) => <[FTName]Presenter {...presenterProps} />}
      />
    </[FTName]Context.Provider>
  )
}
