import setuptools

REQUIRED_PACKAGES = ["google-cloud-storage"]

setuptools.setup(
    name='gcs-module',
    version='0.0.1',
    description='Google Cloud Storage SDK package.',
    install_requires=REQUIRED_PACKAGES,
    packages=setuptools.find_packages())
