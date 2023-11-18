import { createContext, useContext } from 'react'
import { [FTName]PresenterProps } from './[FTName]Presenter'
import { [FTName]Context } from './[FTName]'

export type [FTName]ControllerProps = {
  render: (props: [FTName]PresenterProps) => JSX.Element
}

export const [FTName]Controller: React.FC<[FTName]ControllerProps> = ({
  render,
}) => {
  const { } = useContext([FTName]Context)

  return render({})
}

export const [FTName]ControllerContext = createContext([FTName]Controller)