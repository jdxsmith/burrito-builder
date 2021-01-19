import React from 'react';
import App from './App'
import { render, screen, fireEvent } from "@testing-library/react"
import '@testing-library/jest-dom';
import { getOrders, postOrder } from '../../apiCalls'
jest.mock('../../apiCalls')

describe.only('App', () => {
  beforeEach(() => {
    getOrders.mockResolvedValue({
      "orders": [
          {
              "id": 1,
              "name": "Pat",
              "ingredients": [
                  "beans",
                  "lettuce",
                  "carnitas",
                  "queso fresco",
                  "jalapeno"
              ]
          },
          {
              "id": 2,
              "name": "Sam",
              "ingredients": [
                  "steak",
                  "pico de gallo",
                  "lettuce",
                  "carnitas",
                  "queso fresco",
                  "jalapeno"
              ]
          },
          {
              "id": 3,
              "name": "Alex",
              "ingredients": [
                  "sofritas",
                  "beans",
                  "sour cream",
                  "carnitas",
                  "queso fresco"
              ]
          }  
      ]
    })
    render(
      <App />
    )
  })

  it('should render three existing orders', () => {
    const pat = screen.getByText('Pat')
    const sam = screen.getByText('Sam')
    const alex = screen.getByText('Alex')

    expect(pat).toBeInTheDocument()
    expect(sam).toBeInTheDocument()
    expect(alex).toBeInTheDocument()
  })

  it('should create a new order when the form is filled out', async () => {
    const input = screen.getByPlaceholderText('Name')
    const beans = screen.getAllByText('beans')
    const steak = screen.getAllByText('steak')
    const submitOrder = screen.getByText('Submit Order')

    fireEvent.change(input, { target: {value: 'Jordon'} })

    expect(input.value).toBe('Jordon');

    fireEvent.click(beans[0])
    fireEvent.click(steak[0])
    fireEvent.click(submitOrder)

    // const orderName = screen.getByText('Jordon')

    // expect(orderName).toBeInTheDocument()
  })
})