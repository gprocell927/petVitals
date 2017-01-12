import React from 'react'
import Header from './Header'

const Patient = ({ handleSubmit }) => {
  let name
  let dob
  let species
  let sex
  let pawarnings
  let behavior
  let patientID

  return (
  <section className="patientSetup">
    <Header />

    <form
      className="patient-form"
      onSubmit={ (e) => {
      e.preventDefault()

      let info = {
        patientID: Date.now(),
        name: name.value,
        dob: dob.value,
        species: species.value,
        sex: sex.value,
        pawarnings: pawarnings.value,
        behavior: behavior.value
      }
      handleSubmit(info)
    }}>

    <p>{patientID}</p>
    <label className="patient-label">
      Name:
    </label>
    <input
      className="patient-input"
      ref={ (node) => { name = node }}
    />

    <label className="patient-label">
      Date of Birth:
    </label>
    <input
      className="patient-input"
      ref={ (node) => { dob = node }}
    />

    <label className="patient-label">
      Species:
    </label>
    <input
      className="patient-input"
      ref={ (node) => { species = node }}
    />

    <label className="patient-label">
      Sex:
    </label>
    <input
      className="patient-input"
      ref={ (node) => { sex = node }}
    />

    <label className="patient-label">
      Pre-anesthetic warnings:
    </label>
    <input
      className="patient-input"
      ref={ (node) => { pawarnings = node }}
    />

    <label className="patient-label">
      Behavior Warnings:
    </label>
    <input
      className="patient-input"
      ref={ (node) => { behavior = node }}
    />

    <button
      className="patient-submit-button"
      children="Add Patient"
    />

  </form>
</section>

  )
}

export default Patient
