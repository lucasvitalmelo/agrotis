import { Route, Routes } from "react-router-dom"

import { Layout } from "../pages/layout"
import { TestFrontTable } from "../pages/test-front"
import { RegisterForm } from "../pages/register-form"

export function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<TestFrontTable />} />
        <Route path="register-form" element={<RegisterForm />} />
        <Route path="register-form/edit" element={<RegisterForm />} />
      </Route>
    </Routes>
  )
}
