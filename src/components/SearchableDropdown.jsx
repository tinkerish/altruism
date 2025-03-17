import { useEffect, useRef, useState, useCallback } from "react";
import "../styles/dropdown.css";
import { debounce } from "lodash";
import axios from "axios";
const SearchableDropdown = ({
  options,
  label,
  selectedVal,
  handleChange,
  handleOptionsChange,
}) => {
  const [query, setQuery] = useState("");
  const [deboucedQuery, setDebouncedQuery] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  const debouncedSearch = useCallback(
    debounce((query) => {
      setDebouncedQuery(query);
    }, 300),
    []
  );
  useEffect(() => {
    document.addEventListener("click", toggle);
    return () => document.removeEventListener("click", toggle);
  }, []);
  useEffect(() => {
    debouncedSearch(query);
  }, [query]);
  useEffect(() => {
    if (!query) return;
    const fetchLocations = async () => {
      try {
        setLoading(true);
        const response = await axios(
          "https://photon.komoot.io/api/?q=" + deboucedQuery
        );
        const updatedLocations = response.data.features.map((loc) => {
          return {
            id: loc.properties.osm_id,
            name: loc.properties.name,
            street: loc.properties.street,
            city: loc.properties.city,
            state: loc.properties.state,
            country: loc.properties.country,
            postcode: loc.properties.postcode,
            longitude: loc.geometry.coordinates[0],
            latitude: loc.geometry.coordinates[1],
          };
        });
        handleOptionsChange(updatedLocations);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, [deboucedQuery]);

  const selectOption = (option) => {
    setQuery(() => "");
    handleChange(option);
    setIsOpen((isOpen) => !isOpen);
  };

  function toggle(e) {
    setIsOpen(e && e.target === inputRef.current);
  }

  const getDisplayValue = () => {
    console.log(selectedVal);
    if (query) return query;
    if (selectedVal && selectedVal.state && selectedVal.country)
      return `${selectedVal.state}, ${selectedVal.country}`;
    if (selectedVal && selectedVal.state) return `${selectedVal.state}`;
    if (selectedVal && selectedVal.country) return `${selectedVal.country}`;

    return "";
  };

  return (
    <div className="dropdown">
      <div className="control">
        <div className="selected-value">
          <input
            ref={inputRef}
            type="text"
            value={getDisplayValue()}
            name="searchTerm"
            onChange={(e) => {
              setQuery(e.target.value);
              handleChange(null);
            }}
            onClick={toggle}
          />
        </div>
        <div className={`arrow ${isOpen ? "open" : ""}`}></div>
      </div>

      <div className={`options ${isOpen ? "open" : ""}`}>
        {options.map((option) => {
          return (
            <div
              onClick={() => selectOption(option)}
              className={`option ${option === selectedVal ? "selected" : ""}`}
              key={option.id}
            >
              <p>{option.name}</p>
              <p className="text-gray-500">
                {option.street && <span>{option.street}, </span>}
                {option.city && <span>{option.city}, </span>}
                {option.state && <span>{option.state}, </span>}
                {option.country && <span>{option.country}</span>}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchableDropdown;
