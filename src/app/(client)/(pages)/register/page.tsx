"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Container from '@/components/Container'
import Button from '@/components/Button'
import Footer from '@/components/Footer'
import axios from 'axios'
import SuccessModal from '@/components/SuccessModal'
import UserExistsModal from '@/components/UserExistsModal'
import Navbar from '@/components/Navbar'
import LineArtBanner from '@/components/LineArtBanner'

type Props = {}

const formStyles = {
  labelStyle: "text-white md:text-lg lg:text-xl",
  inputStyle: "bg-black border border-gray text-white rounded-md p-1 mt-2 w-full md:p-2",
  divStyle: "mb-5"
}

const RegisterPage = (props: Props) => {
  const [fullName, setFullName] = useState('');
  const [universityMail, setUniversityMail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [studentId, setStudentId] = useState('');
  const [batch, setBatch] = useState('');
  const [formError, setFormError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isUserExist, setIsUserExist] = useState(false);
  const [modal, setModal] = useState(false)

  const clearForm = () => {
    setFullName("");
    setUniversityMail("");
    setContactNumber("");
    setStudentId("");
    setBatch("");
  }

  const validateForm = () => {

    if (!fullName.trim() || !universityMail.trim() || !contactNumber.trim() || !studentId.trim() || !batch.trim()) {
      setFormError("Please fill in all required field*")
      return false
    }


    if (!/^.+@students\.nsbm\.ac\.lk$/.test(universityMail)) {
      setFormError("Please enter a vaild university email*")
      return false
    }
    if (!/^\d{10}$/.test(contactNumber)) {
      setFormError("Please enter a valid contact number*")
      return false
    }

    if (!/^\d+$/.test(studentId)) {
      setFormError("Please enter a valid student ID*")
      return false
    }

    if (!/^\d+\.\d+$/.test(batch)) {
      setFormError("Please enter a valid batch number*")
      return false
    }

    setFormError("")
    return true
  }


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (validateForm()) {

      const userData = {
        fullName,
        universityMail,
        contactNumber,
        studentId,
        batch
      }

      setIsDisabled(true)
      setIsLoading(true)

      axios
        .post("/api/user/register-user", userData)
        .then((data: any) => {
          setIsLoading(false)
          setIsDisabled(false)
          setModal(true)
          console.log(data.error)
          clearForm();
        })
        .catch((error) => {
          setIsUserExist(true)
          setIsLoading(false)
          setIsDisabled(false)
          console.log(error)
        })
    }
  }

  return (
    <>
      <Navbar />
      <LineArtBanner />
      <Container>
        <div className='max-w-4xl mx-auto'>
          <div className='py-10'>
            <h1 className='text-gray text-2xl md:text-4xl lg:text-5xl'>Let&apos;s get <span className='text-white'>registered.</span></h1>
          </div>
          <div className='border border-white rounded-lg p-4 md:p-6'>
            <form action="#">
              <div className={`${formStyles.divStyle}`}>
                <label className={`${formStyles.labelStyle}`}>Name*</label>
                <input
                  type="text"
                  placeholder='Example: John Doe'
                  className={`${formStyles.inputStyle}`}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)} />
              </div>
              <div className={`${formStyles.divStyle}`}>
                <label className={`${formStyles.labelStyle}`}>University email*</label>
                <input type="email" className={`${formStyles.inputStyle}`}
                  value={universityMail}
                  onChange={(e) => setUniversityMail(e.target.value)} />
              </div>
              <div className={`${formStyles.divStyle}`}>
                <label className={`${formStyles.labelStyle}`}>Contact number*</label>
                <input
                  type="text"
                  className={`${formStyles.inputStyle}`}
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)} />
              </div>
              <div className={`${formStyles.divStyle}`}>
                <label className={`${formStyles.labelStyle}`}>Student ID*</label>
                <input
                  type="text"
                  className={`${formStyles.inputStyle}`}
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                />
              </div>
              <div className={`${formStyles.divStyle}`}>
                <label className={`${formStyles.labelStyle}`}>Batch*</label>
                <input
                  type="text"
                  className={`${formStyles.inputStyle}`}
                  value={batch}
                  onChange={(e) => setBatch(e.target.value)}
                />
              </div>
              <div className='mt-6'>
                <div className='text-red'>{formError}</div>
                <Button label='Register' onClick={handleSubmit} long loading={isLoading} disabled={isDisabled} />
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </Container >
      {modal ? <SuccessModal /> : ""}
      {isUserExist ? <UserExistsModal /> : ""}
    </ >
  )
}

export default RegisterPage