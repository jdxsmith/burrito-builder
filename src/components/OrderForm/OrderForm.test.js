import React from 'react';
import OrderForm from './OrderForm'
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom';

describe('OrderForm', () => {
  beforeEach(() => {
    render(
      <OrderForm />
    )
  })

  it('should have an input field', () => {
    const input = screen.getByPlaceholderText('Name')

    expect(input).toBeInTheDocument()
  })

  it('should have ingredients options', () => {
    const beans = screen.getByText('beans')
    const steak = screen.getByText('steak')

    expect(beans).toBeInTheDocument()
    expect(steak).toBeInTheDocument()
  })
})
