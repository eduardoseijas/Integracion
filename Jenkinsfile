pipeline {
    agent any

    tools {nodejs "node"}

    stages {

        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agent1_1"
                    }
                    steps {
                        git url: 'https://github.com/eduardoseijas/Integracion.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 68a58e64-711c-452e-bfcc-05c2d7e4ba14  --parallel'
                    
                    }
                }

                stage('Slave 2') {
                    agent {
                        label "Agent1_2"
                    }
                    steps {
                        git url: 'https://github.com/eduardoseijas/Integracion.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 68a58e64-711c-452e-bfcc-05c2d7e4ba14  --parallel'
                    
                    }
                }

                
               

               

                
   
                  
            }

             
        }

    }
            
}