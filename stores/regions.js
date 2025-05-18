import { defineStore } from 'pinia'

export const useRegionsStore = defineStore('regions', {
  state: () => ({
    regions: [
      {
        id: 'dakar',
        name: 'Dakar',
        population: 3732282,
        crimeRate: 'Modéré',
        responseTime: '10-15 minutes',
        mainCities: ['Dakar', 'Pikine', 'Guédiawaye', 'Rufisque', 'Bargny', 'Diamniadio', 'Sangalkam'],
        specificRisks: [
          'Vols à la tire dans les zones commerciales',
          'Cambriolages résidentiels',
          'Sécurité des zones commerciales',
          'Risques liés aux manifestations',
          'Sécurité portuaire et aéroportuaire'
        ],
        securityDescription: 'Zone urbaine dense nécessitant une surveillance accrue et des interventions rapides. La région concentre les principales activités économiques et administratives du pays, avec des défis spécifiques liés à la densité de population et à la diversité des zones à risque (port, aéroport, zones commerciales, quartiers résidentiels).'
      },
      {
        id: 'thies',
        name: 'Thiès',
        population: 1995037,
        crimeRate: 'Faible à modéré',
        responseTime: '15-20 minutes',
        mainCities: ['Thiès', 'Mbour', 'Tivaouane', 'Khombole', 'Pout', 'Kayar', 'Mboro'],
        specificRisks: [
          'Sécurité industrielle',
          'Protection des zones touristiques',
          'Surveillance des axes routiers',
          'Sécurité des sites miniers',
          'Protection des infrastructures ferroviaires'
        ],
        securityDescription: 'Région industrielle et touristique majeure, combinant zones urbaines, industrielles et balnéaires. La présence d\'industries minières et d\'infrastructures critiques nécessite une approche de sécurité diversifiée.'
      },
      {
        id: 'diourbel',
        name: 'Diourbel',
        population: 1801301,
        crimeRate: 'Faible',
        responseTime: '20-25 minutes',
        mainCities: ['Diourbel', 'Mbacké', 'Bambey', 'Touba', 'Ndame', 'Taif'],
        specificRisks: [
          'Sécurité des événements religieux',
          'Protection des commerces',
          'Surveillance des marchés',
          'Gestion des foules lors des pèlerinages',
          'Sécurité des infrastructures religieuses'
        ],
        securityDescription: 'Centre religieux majeur du Sénégal, avec des enjeux de sécurité particuliers liés aux grands rassemblements et aux événements religieux. La région nécessite une expertise en gestion des foules et en protection des sites religieux.'
      },
      {
        id: 'fatick',
        name: 'Fatick',
        population: 714392,
        crimeRate: 'Très faible',
        responseTime: '25-30 minutes',
        mainCities: ['Fatick', 'Gossas', 'Foundiougne', 'Diofior', 'Sokone', 'Passy'],
        specificRisks: [
          'Protection environnementale',
          'Sécurité des sites touristiques',
          'Surveillance côtière',
          'Protection des parcs naturels',
          'Sécurité des activités salines'
        ],
        securityDescription: 'Région côtière riche en biodiversité, nécessitant une expertise en protection environnementale et écotourisme. La présence de sites naturels protégés et d\'activités traditionnelles comme l\'exploitation du sel exige une approche équilibrée.'
      },
      {
        id: 'kaffrine',
        name: 'Kaffrine',
        population: 566992,
        crimeRate: 'Très faible',
        responseTime: '25-30 minutes',
        mainCities: ['Kaffrine', 'Koungheul', 'Malem Hodar', 'Birkelane', 'Nganda'],
        specificRisks: [
          'Protection agricole',
          'Sécurité des marchés ruraux',
          'Surveillance des zones de stockage',
          'Protection des infrastructures routières',
          'Sécurité des zones de production'
        ],
        securityDescription: 'Région agricole majeure nécessitant une expertise en protection des cultures et sécurité rurale. L\'importance de la production agricole et la présence de nombreux marchés ruraux exigent une approche adaptée aux enjeux de sécurité alimentaire.'
      },
      {
        id: 'kaolack',
        name: 'Kaolack',
        population: 1155433,
        crimeRate: 'Faible',
        responseTime: '20-25 minutes',
        mainCities: ['Kaolack', 'Nioro du Rip', 'Guinguinéo', 'Gandiaye', 'Kahone', 'Ndoffane'],
        specificRisks: [
          'Sécurité des marchés régionaux',
          'Protection des entrepôts',
          'Surveillance commerciale',
          'Sécurité routière',
          'Protection des infrastructures de transport'
        ],
        securityDescription: 'Carrefour commercial majeur du Sénégal, la région nécessite une expertise en sécurité commerciale et logistique. La présence du plus grand marché céréalier du pays exige une surveillance constante.'
      },
      {
        id: 'kedougou',
        name: 'Kédougou',
        population: 178137,
        crimeRate: 'Faible',
        responseTime: '35-40 minutes',
        mainCities: ['Kédougou', 'Salémata', 'Saraya', 'Fongolimbi', 'Bandafassi'],
        specificRisks: [
          'Sécurité minière',
          'Protection environnementale',
          'Surveillance des sites d\'orpaillage',
          'Protection de la biodiversité',
          'Sécurité des zones touristiques'
        ],
        securityDescription: 'Région minière et écologique unique, combinant exploitation aurifère et protection de l\'environnement. La présence de sites miniers industriels et artisanaux nécessite une approche équilibrée.'
      },
      {
        id: 'kolda',
        name: 'Kolda',
        population: 796581,
        crimeRate: 'Faible',
        responseTime: '25-30 minutes',
        mainCities: ['Kolda', 'Vélingara', 'Médina Yoro Foulah', 'Dabo', 'Salikégné'],
        specificRisks: [
          'Sécurité forestière',
          'Protection des cultures',
          'Surveillance transfrontalière',
          'Protection de la biodiversité',
          'Sécurité des corridors de transhumance'
        ],
        securityDescription: 'Zone agricole et forestière stratégique nécessitant une expertise en protection environnementale et sécurité transfrontalière. La région combine enjeux de conservation et développement agricole.'
      },
      {
        id: 'louga',
        name: 'Louga',
        population: 1001415,
        crimeRate: 'Très faible',
        responseTime: '25-30 minutes',
        mainCities: ['Louga', 'Kébémer', 'Linguère', 'Dahra', 'Ndiagne', 'Guéoul'],
        specificRisks: [
          'Sécurité rurale',
          'Protection du bétail',
          'Surveillance des zones pastorales',
          'Sécurité des marchés hebdomadaires',
          'Protection des ressources naturelles'
        ],
        securityDescription: 'Zone agropastorale importante nécessitant une expertise en sécurité rurale et protection du bétail. La région fait face à des défis spécifiques liés à la transhumance.'
      },
      {
        id: 'matam',
        name: 'Matam',
        population: 562539,
        crimeRate: 'Très faible',
        responseTime: '30-35 minutes',
        mainCities: ['Matam', 'Kanel', 'Ranérou', 'Ourossogui', 'Thilogne', 'Waoundé'],
        specificRisks: [
          'Sécurité fluviale',
          'Protection pastorale',
          'Surveillance frontalière',
          'Sécurité des infrastructures hydrauliques',
          'Protection des zones de pêche'
        ],
        securityDescription: 'Région frontalière stratégique avec des enjeux agropastoraux importants. La présence du fleuve Sénégal et l\'importance des activités pastorales nécessitent une expertise spécifique.'
      },
      {
        id: 'saint-louis',
        name: 'Saint-Louis',
        population: 1063539,
        crimeRate: 'Faible à modéré',
        responseTime: '15-20 minutes',
        mainCities: ['Saint-Louis', 'Dagana', 'Richard-Toll', 'Podor', 'Ross Béthio', 'Mpal'],
        specificRisks: [
          'Protection du patrimoine historique',
          'Sécurité touristique',
          'Surveillance des zones portuaires',
          'Protection des infrastructures agricoles',
          'Sécurité fluviale'
        ],
        securityDescription: 'Ville historique classée au patrimoine mondial de l\'UNESCO, combinant enjeux touristiques et agricoles. La région requiert une approche équilibrée entre protection du patrimoine et sécurité moderne.'
      },
      {
        id: 'sedhiou',
        name: 'Sédhiou',
        population: 452994,
        crimeRate: 'Faible',
        responseTime: '25-30 minutes',
        mainCities: ['Sédhiou', 'Bounkiling', 'Goudomp', 'Marsassoum', 'Diattacounda'],
        specificRisks: [
          'Protection agricole',
          'Sécurité fluviale',
          'Surveillance transfrontalière',
          'Protection des zones de production',
          'Sécurité des marchés locaux'
        ],
        securityDescription: 'Région agricole stratégique avec des enjeux de développement rural importants. La combinaison d\'activités agricoles et de commerce transfrontalier nécessite une approche intégrée.'
      },
      {
        id: 'tambacounda',
        name: 'Tambacounda',
        population: 681310,
        crimeRate: 'Faible',
        responseTime: '30-35 minutes',
        mainCities: ['Tambacounda', 'Bakel', 'Goudiry', 'Kidira', 'Koumpentoum'],
        specificRisks: [
          'Protection minière',
          'Sécurité des parcs nationaux',
          'Surveillance des frontières',
          'Protection des corridors ferroviaires',
          'Sécurité des sites d\'orpaillage'
        ],
        securityDescription: 'Plus grande région du Sénégal, combinant activités minières et protection de la nature. La présence de parcs nationaux et de sites miniers nécessite une approche diversifiée.'
      },
      {
        id: 'ziguinchor',
        name: 'Ziguinchor',
        population: 662492,
        crimeRate: 'Modéré',
        responseTime: '20-25 minutes',
        mainCities: ['Ziguinchor', 'Bignona', 'Oussouye', 'Thionck Essyl', 'Diouloulou'],
        specificRisks: [
          'Sécurité transfrontalière',
          'Protection des zones agricoles',
          'Surveillance des axes commerciaux',
          'Sécurité maritime et fluviale',
          'Protection des sites touristiques'
        ],
        securityDescription: 'Région méridionale stratégique nécessitant une expertise en sécurité transfrontalière et protection des activités économiques. La diversité des enjeux exige une approche multidimensionnelle.'
      }
    ]
  }),

  getters: {
    getRegionById: (state) => (id) => {
      return state.regions.find(region => region.id === id)
    },
    
    getAllRegions: (state) => {
      return state.regions
    },
    
    getRegionsByRiskLevel: (state) => (crimeRate) => {
      return state.regions.filter(region => region.crimeRate === crimeRate)
    },
    
    getRegionsByResponseTime: (state) => (maxTime) => {
      return state.regions.filter(region => {
        const [min] = region.responseTime.split('-').map(t => parseInt(t))
        return min <= maxTime
      })
    },

    getRegionsList: (state) => {
      return state.regions.map(region => region.name)
    },

    getRegionCommunes: (state) => (regionName) => {
      const region = state.regions.find(r => r.name === regionName)
      return region ? region.mainCities : []
    }
  },

  actions: {
    async fetchRegionDetails(id) {
      // TODO: Implémenter la récupération des détails depuis une API
      return this.getRegionById(id)
    },
    
    async updateRegionStats(id, newStats) {
      const region = this.regions.find(r => r.id === id)
      if (region) {
        Object.assign(region, newStats)
      }
    }
  }
}) 