pipeline {
	agent {
		docker {
			image 'node'
		}
	}
	stages {
	    stage('Install tools') {
	        steps {
	            sh 'apt-get update'
	            sh 'apt-get install -y curl'
	        }
	    }

	    stage('Collect data') {
	        steps {
	            sh 'mkdir -p tmp'
	            sh 'curl https://baconipsum.com/api/?type=meat-and-filler --output tmp/meat.json --silent'
	        }
	    }

	    stage('Process data') {
	        steps {
               sh 'node index.js'
            }
	    }

	    stage('Publish results') {
	        steps {
	            archive 'tmp/meat.md'
	        }
	    }
	}
}
