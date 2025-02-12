import React from "react";
import { useRef, useEffect } from "react";

import { Grid } from "@giphy/react-components";
import { GiphyFetch } from "@giphy/js-fetch-api";

import _ from "lodash";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useDispatch } from "react-redux";
import { toggleGifModal } from "../redux/slices/app";

const gf = new GiphyFetch("ak2Viynf0qhURfKlXFuSxyE93DnAAbkS");

export default function Giphy() {
  const dispatch = useDispatch();
  const gridRef = React.useRef(null);
  const [loading, setLoading] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [gifs, setGifs] = React.useState([]); // store fetched gifs
  const [showGifs, setShowGifs] = React.useState(false); // state to control visibility

  const fetchGifs = async (offset) => {
    return gf.search(value, { offset, limit: 10 });
  };

  const debouncedFetchGifs = _.debounce(async () => {
    setLoading(true);
    setError(null); // reset previous error
    try {
      const newGifs = await fetchGifs(0);
      setGifs(newGifs.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, 500); // debounce time to 500ms

  useEffect(() => {
    // fetch gifs initally based on search term
    const fetchInitialGifs = async () => {
      setLoading(true);
      setError(null);

      try {
        const newGifs = await fetchGifs(0);
        setGifs(newGifs.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchInitialGifs();
  }, []);

  const handelGifClick = (gif, e) => {
    e.preventDefault();
    const gifUrl = gif.images.original.url;
    dispatch(
      toggleGifModal({
        value: true,
        url: gifUrl,
      })
    );
  };

  const toggleGifs = () => {
    setShowGifs(!showGifs);
  };

  return (
    <div ref={gridRef} className="w-full mt-3">
      <button
        onClick={toggleGifs}
        className="mb-2 p-2 bg-blue-500 text-white rounded"
      >
        {showGifs ? "Hide Gifs" : "Show Gifs"}
      </button>
      {showGifs && (
        <>
          <input
            type="text"
            placeholder="Search Giphy"
            className="border border-stroke dark:border-strokedark rounded-md p-2 w-full mb-2 outline-none bg-transparent"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              debouncedFetchGifs(); // call debounced function on every change
            }}
          />
          {loading && <p>Loading...</p>}
          {error && <p className="text-red">Error: {error}</p>}
          <div className="h-48 overflow-auto no-scrollbar">
            <div className="grid grid-cols-3 gap-2">
              {gifs.length > 0 ? (
                <Grid
                  width={gridRef.current?.offsetWidth}
                  columns={8}
                  gutter={6}
                  fetchGifs={fetchGifs}
                  key={value}
                  onGifClick={handelGifClick}
                  data={gifs}
                />
              ) : (
                <div className="flex flex-row items-center justify-center h-full space-y-2">
                  <MagnifyingGlass size={48} weight="bold" />
                  <span className="text-xl text-body font-semibold">
                    Search for gifs
                  </span>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
