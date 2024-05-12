import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import InputGroup from 'react-bootstrap/InputGroup'

function FormComponent () {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    city: '',
    state: '',
    zip: '',
    agreeToTerms: false
  })

  const [touchedFields, setTouchedFields] = useState({
    firstName: false,
    lastName: false,
    username: false,
    city: false,
    state: false,
    zip: false,
    agreeToTerms: false
  })

  const handleInputChange = e => {
    const { name, value, type, checked } = e.target
    const inputValue = type === 'checkbox' ? checked : value

    setFormData(prevData => ({
      ...prevData,
      [name]: inputValue
    }))
  }

  const handleBlur = e => {
    const { name } = e.target

    setTouchedFields(prevTouchedFields => ({
      ...prevTouchedFields,
      [name]: true
    }))
  }

  const getValidationClass = fieldName => {
    if (touchedFields[fieldName]) {
      return formData[fieldName] && typeof formData[fieldName] === 'string'
        ? formData[fieldName].trim() === ''
          ? 'border border-danger'
          : 'border border-success'
        : ''
    }
    return ''
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (!formData.agreeToTerms) {
      setTouchedFields(prevTouchedFields => ({
        ...prevTouchedFields,
        agreeToTerms: true
      }))
    }

    if (touchedFields.agreeToTerms && !formData.agreeToTerms) {
    } else if (formData.agreeToTerms) {
      window.location.reload()
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Row className='mb-3 d-flex justify-content-between'>
        <Form.Group as={Col} controlId='formGridFirstName'>
          <Form.Label>First name</Form.Label>
          <Form.Control
            type='text'
            placeholder='First name'
            name='firstName'
            value={formData.firstName}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={getValidationClass('firstName')}
          />
          {touchedFields.firstName && formData.firstName.trim() === '' && (
            <Form.Text className='text-danger'>
              Please enter your first name
            </Form.Text>
          )}
          {touchedFields.firstName && formData.firstName.trim() !== '' && (
            <Form.Text className='text-success'>Looks Good!</Form.Text>
          )}
        </Form.Group>

        <Form.Group as={Col} controlId='formGridLastName'>
          <Form.Label>Last name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Last name'
            name='lastName'
            value={formData.lastName}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={getValidationClass('lastName')}
          />
          {touchedFields.lastName && formData.lastName.trim() === '' && (
            <Form.Text className='text-danger'>
              Please enter your last name
            </Form.Text>
          )}
          {touchedFields.lastName && formData.lastName.trim() !== '' && (
            <Form.Text className='text-success'>Looks Good!</Form.Text>
          )}
        </Form.Group>

        <Form.Group as={Col} controlId='formGridUsername'>
          <Form.Label>Username</Form.Label>
          <InputGroup className='mb-2'>
            <InputGroup.Text>@</InputGroup.Text>
            <Form.Control
              id='inlineFormInputGroup'
              placeholder='Username'
              name='username'
              value={formData.username}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={getValidationClass('username')}
            />
          </InputGroup>
          {touchedFields.username && formData.username.trim() === '' && (
            <Form.Text className='text-danger'>
              Please enter a username
            </Form.Text>
          )}
          {touchedFields.username && formData.username.trim() !== '' && (
            <Form.Text className='text-success'>Looks Good!</Form.Text>
          )}
        </Form.Group>
      </Row>

      <Row className='mb-3 d-flex justify-content-between'>
        <Form.Group as={Col} controlId='formGridCity'>
          <Form.Label>City</Form.Label>
          <Form.Control
            type='text'
            placeholder='City'
            name='city'
            value={formData.city}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={getValidationClass('city')}
          />
          {touchedFields.city && formData.city.trim() === '' && (
            <Form.Text className='text-danger'>
              Please enter your city
            </Form.Text>
          )}
          {touchedFields.city && formData.city.trim() !== '' && (
            <Form.Text className='text-success'>Looks Good!</Form.Text>
          )}
        </Form.Group>

        <Form.Group as={Col} controlId='formGridState'>
          <Form.Label>State</Form.Label>
          <Form.Control
            type='text'
            placeholder='State'
            name='state'
            value={formData.state}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={getValidationClass('state')}
          />
          {touchedFields.state && formData.state.trim() === '' && (
            <Form.Text className='text-danger'>
              Please enter your state
            </Form.Text>
          )}
          {touchedFields.state && formData.state.trim() !== '' && (
            <Form.Text className='text-success'>Looks Good!</Form.Text>
          )}
        </Form.Group>

        <Form.Group as={Col} controlId='formGridZip'>
          <Form.Label>Zip</Form.Label>
          <Form.Control
            type='number'
            placeholder='Zip'
            name='zip'
            value={formData.zip}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={getValidationClass('zip')}
          />
          {touchedFields.zip && formData.zip.trim() === '' && (
            <Form.Text className='text-danger'>
              Please enter your zip code
            </Form.Text>
          )}
          {touchedFields.zip && formData.zip.trim() !== '' && (
            <Form.Text className='text-success'>Looks Good!</Form.Text>
          )}
        </Form.Group>
      </Row>

      <Form.Group className='mb-3' id='formGridCheckbox'>
        <Form.Check
          type='checkbox'
          label='Agree to terms and conditions'
          name='agreeToTerms'
          checked={formData.agreeToTerms}
          onChange={handleInputChange}
          onBlur={handleBlur}
          className={getValidationClass('agreeToTerms')}
        />
        {touchedFields.agreeToTerms && !formData.agreeToTerms && (
          <Form.Text className='text-danger'>
            Please agree to terms and conditions
          </Form.Text>
        )}
      </Form.Group>

      <Button variant='primary' type='submit'>
        Submit form
      </Button>
    </Form>
  )
}

export default FormComponent
