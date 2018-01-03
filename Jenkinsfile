pipeline {
	agent {
		docker {
			image 'node'
		}
	}
	stages {
	    stage('Install tools') {
	        steps {
	            sh 'npm install'
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
	            publishHTML target: [
                        allowMissing         : false,
                        alwaysLinkToLastBuild: false,
                        keepAll              : true,
                        reportDir            : 'tmp',
                        reportFiles          : 'meat.html',
                        reportName           : 'Generated html'
                ]
	        }
	    }

	    stage('Install React') {
	        steps {
	            sh 'mkdir -p src'
	            sh 'cp reactPackage.json src/package.json'
	            sh 'ls src'
	        }
	    }
	}
}