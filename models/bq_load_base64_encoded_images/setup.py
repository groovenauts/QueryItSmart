import subprocess
from distutils.command.build import build as _build
import setuptools


class build(_build):  # pylint: disable=invalid-name
  sub_commands = _build.sub_commands + [('CustomCommands', None)]


class CustomCommands(setuptools.Command):

  def initialize_options(self):
    pass

  def finalize_options(self):
    pass

  def RunCustomCommand(self, command_list):
    print 'Running command: %s' % command_list
    p = subprocess.Popen(
        command_list,
        stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
    # Can use communicate(input='y\n'.encode()) if the command run requires
    # some confirmation.
    stdout_data, _ = p.communicate()
    print 'Command output: %s' % stdout_data
    if p.returncode != 0:
      raise RuntimeError(
          'Command %s failed: exit code: %s' % (command_list, p.returncode))

  def run(self):
    for command in CUSTOM_COMMANDS:
      self.RunCustomCommand(command)


CUSTOM_COMMANDS = [['pip', 'install', 'google-cloud-storage']]

REQUIRED_PACKAGES = []

setuptools.setup(
    name='gcs-module',
    version='0.0.1',
    description='Google Cloud Storage SDK package.',
    install_requires=REQUIRED_PACKAGES,
    packages=setuptools.find_packages(),
    cmdclass={'build': build, 'CustomCommands': CustomCommands})
