import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Login() {
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-claimm-beige flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="flex justify-center mb-10">
          <img src={logo} alt="claim.m" className="h-12 w-auto" />
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white border border-claimm-dark/10 rounded-md p-8 flex flex-col gap-4"
        >
          <div>
            <label className="block text-xs font-medium text-claimm-dark/70 mb-1.5" htmlFor="email">
              E-Mail
            </label>
            <input
              id="email"
              type="email"
              defaultValue="e.wuestenhoefer@claimm.de"
              className="w-full border border-claimm-dark/20 rounded px-3 py-2 text-sm text-claimm-dark bg-white focus:outline-none focus:ring-2 focus:ring-claimm-red/40 focus:border-claimm-red"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-claimm-dark/70 mb-1.5" htmlFor="password">
              Passwort
            </label>
            <input
              id="password"
              type="password"
              defaultValue="password"
              className="w-full border border-claimm-dark/20 rounded px-3 py-2 text-sm text-claimm-dark bg-white focus:outline-none focus:ring-2 focus:ring-claimm-red/40 focus:border-claimm-red"
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full bg-claimm-red text-white text-sm font-medium py-2.5 rounded hover:bg-claimm-red/90 transition-colors"
          >
            Anmelden
          </button>
        </form>

        <p className="text-center text-xs text-claimm-dark/50 mt-6">
          Microsoft 365 Single Sign-On aktiv
        </p>
      </div>
    </div>
  )
}
