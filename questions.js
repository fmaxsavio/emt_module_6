const questions = [
      {
    q: "What does electric flux density represent?",
    options: [
      "The amount of electric field per unit charge",
      "The amount of electric flux per unit area",
      "The number of lines of force per unit charge",
      "The energy stored in the field"
    ],
    answer: 1,
  },
  {
    q: "Which of the following quantities is directly related to electric susceptibility?",
    options: [
      "Electric field strength",
      "Electric permittivity",
      "Electric potential",
      "Magnetic field"
    ],
    answer: 1,
  },
  {
    q: "Electric flux density is a vector quantity because:",
    options: [
      "It has magnitude only",
      "It depends on the medium",
      "It has both magnitude and direction",
      "It is a scalar field"
    ],
    answer: 2,
  },
  {
    q: "In vacuum, the electric flux density is proportional to:",
    options: [
      "Electric charge",
      "Electric susceptibility",
      "Electric field intensity",
      "Electric current"
    ],
    answer: 2,
  },
  {
    q: "Electric susceptibility is a measure of:",
    options: [
      "How much charge a body holds",
      "The ability of a material to conduct electricity",
      "The extent to which a material can be polarized",
      "Resistance to electric current"
    ],
    answer: 2,
  },
  {
    q: "Electric susceptibility is zero for:",
    options: [
      "Ferroelectric materials",
      "Vacuum",
      "Dielectric materials",
      "Polar molecules"
    ],
    answer: 1,
  },
  {
    q: "Which physical constant links electric field and electric flux density?",
    options: [
      "Electric potential",
      "Permittivity",
      "Susceptibility",
      "Conductivity"
    ],
    answer: 1,
  },
  {
    q: "If susceptibility is high, the dielectric material will:",
    options: [
      "Store less electric energy",
      "Not polarize",
      "Be easily polarized",
      "Conduct electricity better"
    ],
    answer: 2,
  },
  {
    q: "Electric flux density (D) is independent of:",
    options: [
      "Electric field intensity",
      "Type of dielectric medium",
      "Shape of the conductor",
      "Polarization of medium"
    ],
    answer: 2,
  },
  {
    q: "The unit of electric flux density is:",
    options: [
      "V/m",
      "F/m",
      "N/C"
      "C/m²",
    ],
    answer: 3,
  },
  {
    q: "Relative permittivity is also known as:",
    options: [
      "Electric conductivity",
      "Dielectric constant",
      "Electric flux density",
      "Electric resistance"
    ],
    answer: 1,
  },
  {
    q: "Relative permittivity is defined as the ratio of:",
    options: [
      "Electric field in vacuum to in a medium",
      "Charge in vacuum to charge in material",
      "Electric potential in vacuum to medium"
      "Permittivity of material to vacuum",
    ],
    answer: 3,
  },
  {
    q: "A relative permittivity greater than 1 means the material is:",
    options: [
      "A good conductor",
      "Less polarizable",
      "A dielectric",
      "Highly resistive"
    ],
    answer: 2,
  },
  {
    q: "Relative permittivity affects:",
    options: [
      "Magnetic field strength",
      "Electric field and capacitance",
      "Resistance of wire",
      "Current through resistor"
    ],
    answer: 1,
  },
  {
    q: "Which material has a relative permittivity of exactly 1?",
    options: [
      "Vacuum",
      "Glass",
      "Water",
      "Air at sea level"
    ],
    answer: 0,
  },
  {
    q: "Higher relative permittivity indicates:",
    options: [
      "Stronger electric field",
      "Weaker electric field in the medium",
      "Better conductor",
      "Higher current"
    ],
    answer: 2,
  },
  {
    q: "Capacitance increases with:",
    options: [
      "Lower relative permittivity",
      "Higher resistance",
      "Higher relative permittivity",
      "Decrease in voltage"
    ],
    answer: 2,
  },
  {
    q: "Relative permittivity is a:",
    options: [
      "Vector quantity",
      "Scalar quantity",
      "Complex number",
      "Negative quantity"
    ],
    answer: 1,
  },
  {
    q: "Materials with very high relative permittivity are used in:",
    options: [
      "Heating elements",
      "Capacitors",
      "Resistors",
      "Motors"
    ],
    answer: 1,
  },
  {
    q: "Relative permittivity varies with:",
    options: [
      "Frequency of applied field",
      "Resistance of the wire",
      "Current flow",
      "Mass of dielectric"
    ],
    answer: 0,
  },
  {
    q: "Lossy dielectrics are characterized by:",
    options: [
      "Zero energy loss",
      "Finite conductivity",
      "Infinite resistance",
      "Perfect insulation"
    ],
    answer: 1,
  },
  {
    q: "A real dielectric differs from an ideal dielectric in that it:",
    options: [
      "Conducts electricity perfectly",
      "Does not polarize",
      "Exhibits energy loss as heat",
      "Blocks all electric fields"
    ],
    answer: 2,
  },
  {
    q: "Which of the following contributes to dielectric loss?",
    options: [
      "Molecular friction",
      "Zero polarization",
      "Constant permittivity",
      "High magnetic field"
    ],
    answer: 0,
  },
  {
    q: "Loss tangent in lossy dielectrics represents:",
    options: [
      "Ratio of stored to lost energy",
      "Ratio of conductivity to resistivity",
      "Ratio of permittivity to permeability",
      "Ratio of loss to stored energy"
    ],
    answer: 3,
  },
  {
    q: "Which of the following is a typical lossy dielectric?",
    options: [
      "Perfect vacuum",
      "Distilled water",
      "Air",
      "Glass"
    ],
    answer: 1,
  },
  {
    q: "In lossy dielectrics, the permittivity is:",
    options: [
      "Always real",
      "Always imaginary",
      "A complex number",
      "Undefined"
    ],
    answer: 2,
  },
  {
    q: "Dielectric loss increases with:",
    options: [
      "Decrease in frequency",
      "Increase in field uniformity",
      "Increase in frequency",
      "Use of ideal insulators"
    ],
    answer: 2,
  },
  {
    q: "Lossy dielectrics convert some electrical energy into:",
    options: [
      "Magnetic flux",
      "Light",
      "Sound",
      "Heat"
    ],
    answer: 3,
  },
  {
    q: "The power loss in lossy dielectrics is proportional to:",
    options: [
      "Magnetic field intensity",
      "Square of electric field",
      "Resistance",
      "Length of dielectric"
    ],
    answer: 1,
  },
  {
    q: "Real dielectrics used in practice are:",
    options: [
      "Completely lossless",
      "Ideal insulators",
      "Non-polarizable",
      "Partially conducting"
    ],
    answer: 3,
  },
  {
    q: "Electrostatic energy in a dielectric medium is stored in the form of:",
    options: [
      "Kinetic energy",
      "Magnetic energy",
      "Electric potential energy",
      "Chemical energy"
    ],
    answer: 2,
  },
  {
    q: "Energy stored in a dielectric is due to:",
    options: [
      "Conduction",
      "Polarization",
      "Magnetization",
      "Mechanical vibration"
    ],
    answer: 1,
  },
  {
    q: "Increasing the permittivity of the medium results in:",
    options: [
      "Decrease in energy storage",
      "No effect on energy",
      "Increase in energy storage",
      "Decrease in capacitance"
    ],
    answer: 2,
  },
  {
    q: "The energy density in a dielectric medium depends on:",
    options: [
      "Magnetic field strength",
      "Electric field only",
      "Electric field and permittivity",
      "Current"
    ],
    answer: 2,
  },
  {
    q: "Which quantity determines energy density in dielectric media?",
    options: [
      "Resistance",
      "Electric field intensity",
      "Permittivity and electric field",
      "Inductance"
    ],
    answer: 2,
  },
  {
    q: "The work done to charge a capacitor is stored as:",
    options: [
      "Electric current",
      "Mechanical pressure",
      "Electrostatic energy",
      "Heat energy"
    ],
    answer: 2,
  },
  {
    q: "The electrostatic energy increases when:",
    options: [
      "Permittivity decreases",
      "Electric field reduces",
      "Dielectric is removed"
      "Capacitance increases",
    ],
    answer: 3,
  },
  {
    q: "What is the effect of inserting a dielectric between capacitor plates?",
    options: [
      "Increases electrostatic energy",
      "Decreases stored charge",
      "Increases current",
      "Eliminates voltage"
    ],
    answer: 0,
  },
  {
    q: "In electrostatics, energy is stored primarily due to:",
    options: [
      "Friction",
      "Charge separation",
      "Voltage drop",
      "Electric dipole movement"
    ],
    answer: 1,
  },
  {
    q: "Which device is designed to store electrostatic energy?",
    options: [
      "Resistor",
      "Inductor",
      "Transformer",
      "Capacitor"
    ],
    answer: 3,
  },
  {
    q: "Boundary conditions in electrostatics are required to:",
    options: [
      "Define magnetic field lines",
      "Ensure continuity of current",
      "Determine electric field behavior at interfaces",
      "Compute resistance"
    ],
    answer: 2,
  },
  {
    q: "At the boundary between two dielectrics, the tangential component of E-field is:",
    options: [
      "Always zero",
      "Discontinuous",
      "Always continuous",
      "Dependent on permittivity"
    ],
    answer: 2,
  },
  {
    q: "The normal component of electric displacement (D) is discontinuous at a boundary if:",
    options: [
      "There is surface charge",
      "The tangential field changes",
      "Electric potential is constant",
      "Both media are identical"
    ],
    answer: 0,
  },
  {
    q: "Which field remains continuous across a dielectric-dielectric interface?",
    options: [
      "Normal component of E",
      "Tangential component of E",
      "Normal component of D",
      "Tangential component of D"
    ],
    answer: 1,
  },
  {
    q: "Surface charge affects:",
    options: [
      "Tangential field components",
      "Normal component of D",
      "Continuity of potential",
      "All field directions"
    ],
    answer: 1,
  },
  {
    q: "Discontinuity in D at a boundary implies:",
    options: [
      "Perfect insulation",
      "Presence of surface charge",
      "Magnetic interference",
      "Zero electric field"
    ],
    answer: 1,
  },
  {
    q: "Boundary conditions are applied in solving:",
    options: [
      "Kirchhoff's laws",
      "Laplace or Poisson equations",
      "Maxwell's time-varying equations",
      "Ohm's law"
    ],
    answer: 1,
  },
  {
    q: "Continuity of tangential E implies:",
    options: [
      "Same potential everywhere",
      "No voltage drop",
      "No sudden change in E-field direction",
      "Constant D field"
    ],
    answer: 2,
  },
  {
    q: "Boundary conditions help relate fields in:",
    options: [
      "Same medium only",
      "Different regions and materials",
      "Vacuum alone",
      "Current carrying wires only"
    ],
    answer: 1,
  },
  {
    q: "Which field may have a discontinuity at the boundary of two dielectrics?",
    options: [
      "Electric field (tangential)",
      "Electric potential",
      "Electric flux density (normal)",
      "Magnetic field"
    ],
    answer: 2,
  },
]
