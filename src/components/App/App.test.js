import React from 'react';
import App from './App'
import { render, screen, fireEvent } from "@testing-library/react"
import '@testing-library/jest-dom';
import { getOrders } from '../../apiCalls'
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
})