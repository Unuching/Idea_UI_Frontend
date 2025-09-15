import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(auth)/register/')({
  component: RegisterPage,
})

function RegisterPage() {
  return <div>Hello "/(auth)/register/inde"!</div>
}
