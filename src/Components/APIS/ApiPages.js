import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getUsers } from '../../Api/UserApi'

const ApiPages = () => {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)


  const getUser = async () => {

    try {
      setLoading(true)
      const res = await getUsers()
      setUsers(res.data ?? [])
      console.log(res, 'getthe user data details from async')
    } catch(err) {
      setError(err)
      console.error('failed to get user data', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  useEffect(() => {

    async function fetchUser() {

      try {
        setLoading(true)
        const response = await getUsers()
        setUsers(response.data)
        console.log(response, 'useEffect get users data fetch')
      } catch(err) {
        setError(err)
        console.error('Failed to fetch users', err)
      } finally {
        setLoading(false)
      }
    }

    fetchUser()

  }, [])



  return (
    <>
      <section className="py-6">
        <article className="container mx-auto">
          <div className="rounded-md border border-gray-200 bg-gray-100 py-6">
            <h1 className="text-center font-semibold text-3xl text-fuchsia-700 mb-6">
              Welcome API's Component
            </h1>

            {/* API Table */ }
            <div className="bg-white border border-gray-200 p-3 mx-12 overflow-x-auto rounded-md shadow-sm">
              { loading ? (
                <p className="text-center py-4 text-gray-500">Loading...</p>
              ) : error ? (
                <p className="text-center py-4 text-red-500">
                  Failed to load user data.
                </p>
              ) : users.length > 0 ? (
                <table className="min-w-full table-auto border-collapse">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 py-3 border border-gray-200 text-left">#</th>
                      { Object.keys(users[0]).map((key) => (
                        <th
                          key={ key }
                          className="px-3 py-3 border border-gray-200 text-left capitalize"
                        >
                          { key }
                        </th>
                      )) }
                    </tr>
                  </thead>
                  <tbody>
                    { users.map((user, index) => (
                      <tr
                        key={ user.id ?? index }
                        className="hover:bg-gray-100 transition-colors"
                      >
                        <td className="px-3 py-2 border border-gray-200 text-center">
                          { index + 1 }
                        </td>
                        { Object.keys(users[0]).map((key) => (
                          <td
                            key={ key }
                            className="px-3 py-2 border border-gray-200 text-sm"
                          >
                            { typeof user[key] === "object" && user[key] !== null
                              ? JSON.stringify(user[key])
                              : String(user[key] ?? "") }
                          </td>
                        )) }
                      </tr>
                    )) }
                  </tbody>
                </table>
              ) : (
                <p className="text-center py-4 text-gray-600">No user data found.</p>
              ) }
            </div>
          </div>
        </article>
      </section>
    </>
  )
}

export default ApiPages