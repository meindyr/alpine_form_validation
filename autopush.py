from os import system, popen
from time import sleep

system("clear || cls")
token = popen('echo $GithubToken').read().replace('\n', '').replace(' ', '')
system("git add .")
system("git commit -m 'AutoPush'")
system("git push https://"+token+"@github.com/meindyr/alpine_form_validation.git")
sleep(3)
