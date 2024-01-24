import React, { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

export default function ContactList({ apiUrl }) {
  const [contacts, setContacts] = useState([]);
  const [page, setPage] = useState(1);
  const [onlyEven, setOnlyEven] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // State for the search term

  useEffect(() => {
    fetchData();
  }, [apiUrl, page, onlyEven, searchTerm]); // Include searchTerm in the dependency array

  const fetchData = async () => {
    const urlWithSearch = `${apiUrl}?page=${page}&page_size=25&search=${searchTerm}`;

    try {
      const res = await axios(urlWithSearch);

      let filteredContacts = res.data.results;

      // Filter contacts if "Only even" checkbox is checked
      if (onlyEven) {
        filteredContacts = filteredContacts.filter(
          (contact) => contact.id % 2 === 0
        );
      }

      setContacts((prevContacts) => [
        ...prevContacts,
        ...filteredContacts.map((contact, index) => ({
          ...contact,
          uniqueKey: contact.id + index,
        })),
      ]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleCheckboxChange = () => {
    // Toggle the value of the "Only even" checkbox
    setOnlyEven((prevValue) => !prevValue);

    // Reset contacts and page to reload the data based on the new checkbox value
    setContacts([]);
    setPage(1);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchButtonClick = () => {
    // Reset contacts and page to reload the data based on the new search term
    setContacts([]);
    setPage(1);
  };

  return (
    <div className="container mt-1">
      <div className="row">
        <div className="col-md-6">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={handleSearchTermChange}
            />
          </div>
        </div>
        <div className="col-md-1">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="onlyEvenCheckbox"
              checked={onlyEven}
              onChange={handleCheckboxChange}
            />
            <label className="form-check-label" htmlFor="onlyEvenCheckbox">
              Only even
            </label>
          </div>
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Phone</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.id}</td>
              <td>{contact.phone}</td>
              <td>{contact.country && contact.country.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <InfiniteScroll
        dataLength={contacts.length}
        next={fetchData}
        hasMore={true}
        loader={<h4 className="loading-indicator">Loading...</h4>}
      ></InfiniteScroll>
    </div>
  );
}
