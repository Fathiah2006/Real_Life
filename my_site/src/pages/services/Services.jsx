import React from 'react'
import CloudSolution from './cloud-solution/CloudSolution'
import Web_Development from './web-development/Web_Development'
import CyberAndMigration from './Cybersecurity/CyberAndMigration'
import AiAndMachine from './aiandmachine learning/Ai_and_Machine'
import SoftwareDevelopment from './software-dev/SoftwareDevelopment'
const Services = () => {
  return (
    <div>
        <Web_Development/>
        <CloudSolution/>
        <CyberAndMigration/>
        <AiAndMachine/>
        <SoftwareDevelopment/>
    </div>
  )
}

export default Services
