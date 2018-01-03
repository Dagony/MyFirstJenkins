pipeline {
	agent {
		docker {
			image 'ubuntu'
		}
	}
	stages {
	    stage('Install tools') {
	        steps {
	            sh 'apt-get update'
	            sh 'apt-get install curl'
	        }
	    }
	}
}
