import {
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState
} from "react"

import { UserSession } from "@prwt/generated/store-api"

interface AuthServiceContextProps {
	setSession: (userSession: UserSession) => unknown
	clearSession: () => void
	isAuthenticated: boolean
	userSession?: UserSession
}

const AuthServiceContext = createContext<AuthServiceContextProps | undefined>(
	undefined
)
AuthServiceContext.displayName = "AuthServiceContext"

export const useAuthService = () => {
	const ctx = useContext(AuthServiceContext)
	if (!ctx) throw new Error("AuthService must be provided before use")
	return ctx
}

export interface ProvideAuthServiceProps {
	children: React.ReactNode
}

export const ProvideAuthService = ({ children }: ProvideAuthServiceProps) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	const [userSession, setUserSession] = useState<UserSession>()

	const clearSession = useCallback(() => {
		setIsAuthenticated(false)
		setUserSession(undefined)
	}, [])

	const value = useMemo((): AuthServiceContextProps => {
		return {
			setSession: setUserSession,
			clearSession,
			isAuthenticated,
			userSession
		}
	}, [clearSession, isAuthenticated, userSession])

	return (
		<AuthServiceContext.Provider value={value}>
			{children}
		</AuthServiceContext.Provider>
	)
}
