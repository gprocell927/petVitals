import React from 'react'
import Header from './Header'

const Reading = ({ handleSubmit }) => {
  let temp
  let heartRate
  let respirations
  let etco2
  let spo2
  let diastolicBP
  let systolicBP
  let meanBP
  let oxygen
  let gasFlow
  let timestamp

  return (
    <div className="reading">
      <Header />

      <form className="reading-form"
            onSubmit={ (e) => {
              e.preventDefault()

        let info = {
          timestamp: new Date().getHours() + ":" + new Date().getMinutes(),
          temp: temp.value,
          heartRate: heartRate.value,
          respirations: respirations.value,
          etco2: etco2.value,
          spo2: spo2.value,
          diastolicBP: diastolicBP.value,
          systolicBP: systolicBP.value,
          meanBP: meanBP.value,
          oxygen: oxygen.value,
          gasFlow: gasFlow.value
        }
        handleSubmit(info)
      }}>

        <label className="reading-label">Oxygen Flow:</label>
        <input className="reading-input"
          ref={ (node) => { oxygen = node }} /> <label>L</label>

        <label className="reading-label vaporizer">Vaporizer Setting:</label>
        <input className="reading-input"
          ref={ (node) => { gasFlow = node }} /> <label>%</label>

        <label className="reading-label">Body Temp:</label>
        <input className="reading-input"
          ref={ (node) => { temp = node }} /> <label>°F</label>

        <label className="reading-label heartRate">Heart Rate:</label>
        <input className="reading-input"
          ref={ (node) => { heartRate = node }} /> <label>bpm</label>

        <label className="reading-label respirations">Respirations:</label>
        <input className="reading-input"
          ref={ (node) => { respirations = node }} /> <label>bpm</label>

        <label className="reading-label">ETCO2:</label>
        <input className="reading-input"
          ref={ (node) => { etco2 = node }} /> <label>mmHg</label>

        <label className="reading-label">SPO2:</label>
        <input className="reading-input"
          ref={ (node) => { spo2 = node }} /> <label>%</label>

        <label className="reading-label">Blood Pressure:</label>
        <input className="reading-input"
          ref={ (node) => { systolicBP = node }} /> <label>/</label>
        <input className="reading-input"
          ref={ (node) => { diastolicBP = node }} /> <label> </label>
        <input className="reading-input"
          ref={ (node) => { meanBP = node }} />

        <button className="reading-submit-button"
          children="Submit Reading" />

      </form>
    </div>
  )
}


export default Reading
