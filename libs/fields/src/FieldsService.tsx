import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState
} from "react"

export interface FieldsServiceContextProps {
	isDisabled: boolean
	/**
	 * Sets whether fields are disabled or not.
	 * @param isDisabled The new disabled state. If not provided toggles the disabled state.
	 * @returns
	 */
	setDisabled: (isDisabled?: boolean) => unknown
}

const FieldsServiceContext = createContext<FieldsServiceContextProps>({
	isDisabled: false,
	setDisabled: () => 0
})
FieldsServiceContext.displayName = "FieldsServiceContext"

export const useFieldsService = () => {
	const ctx = useContext(FieldsServiceContext)
	if (!ctx) throw new Error("FieldsService must be provided before use")
	return ctx
}

export interface ProvideFieldsServiceProps {
	disabled?: boolean
	children: React.ReactNode
}

export const ProvideFieldsService = ({
	disabled = false,
	children
}: ProvideFieldsServiceProps) => {
	const [isDisabled, setIsDisabled] = useState(disabled)
	const setDisabled = useCallback((isDisabled?: boolean) => {
		setIsDisabled((oldDisabled) =>
			isDisabled === undefined ? !oldDisabled : isDisabled
		)
	}, [])

	useEffect(() => {
		setIsDisabled(disabled)
	}, [disabled])

	const value = useMemo((): FieldsServiceContextProps => {
		return {
			isDisabled,
			setDisabled
		}
	}, [isDisabled, setDisabled])
	return (
		<FieldsServiceContext.Provider value={value}>
			{children}
		</FieldsServiceContext.Provider>
	)
}
