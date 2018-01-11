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
	            sh 'npm install newman --save'
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

	    stage('Run Newman Collection') {
	        steps {
                sh 'newman run Sandbox_Quickstart.postman_colleciton.json -e Sandbox_Quickstart.postman_environment.json'
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
	}
}