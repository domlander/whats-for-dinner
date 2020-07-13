import React from "react";
import { render, screen } from '@testing-library/react'
import Breadcrumbs from './Breadcrumbs';

const testData = [
  { text: "crumb1" },
  { text: "crumb2" },
  { text: "crumb3", url: "url123" },
  { text: "crumb4", url: "url234" },
]

describe("Breadcrumbs", () => {
  test('renders breadcrumbs', () => {
    const { queryByLabelText } = render(<Breadcrumbs crumbs={testData} />);
    expect(queryByLabelText("breadcrumb")).toBeTruthy()
  })

  test('renders correct text for each breadcrumb', () => {
    const { getByText } = render(<Breadcrumbs crumbs={testData} />);
    expect(getByText('crumb1')).toBeTruthy()
    expect(getByText('crumb2')).toBeTruthy()
    expect(getByText('crumb3')).toBeTruthy()
    expect(getByText('crumb4')).toBeTruthy()
  })

  test('renders correct link text for each breadcrumb that is a link', () => {
    const { getByText } = render(<Breadcrumbs crumbs={testData} />);
    expect(getByText('crumb3').href).toContain("url123")
    expect(getByText('crumb4').href).toContain("url234")
  })

  test('does not render crumbs as links if url is not provided correct', () => {
    const { getByText } = render(<Breadcrumbs crumbs={testData} />);
    expect(getByText('crumb1').href).toBeFalsy()
    expect(getByText('crumb2').href).toBeFalsy()
  })

  test('renders nothing if no crumbs provided', () => {
    const { queryByLabelText } = render(<Breadcrumbs crumbs={[]} />);
    expect(queryByLabelText("breadcrumb")).toBeFalsy()
  })
})