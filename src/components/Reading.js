import React from 'react'

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
    <section>
      <form onSubmit= { (e) => {
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

        <label>Oxygen Flow:</label>
        <input ref={ (node) => { oxygen = node }} /> <span>L</span>

        <label>Vaporizer Setting:</label>
        <input ref={ (node) => { gasFlow = node }} /> <span>%</span>

        <label>Body Temp:</label>
        <input ref={ (node) => { temp = node }} /> <span>°F</span>

        <label>Heart Rate:</label>
        <input ref={ (node) => { heartRate = node }} /> <span>bpm</span>

        <label>Respirations:</label>
        <input ref={ (node) => { respirations = node }} /> <span>bpm</span>

        <label>ETCO2:</label>
        <input ref={ (node) => { etco2 = node }} /> <span>mmHg</span>

        <label>SPO2:</label>
        <input ref={ (node) => { spo2 = node }} /> <span>%</span>

        <label>Blood Pressure:</label>
        <input ref={ (node) => { systolicBP = node }} /> <span>/</span>
        <input ref={ (node) => { diastolicBP = node }} /> <span> </span>
        <input ref={ (node) => { meanBP = node }} />

        <button children="Submit Reading" />

      </form>
    </section>
  )
}


export default Reading
