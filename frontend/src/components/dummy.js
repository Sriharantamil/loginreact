import React, { useEffect, useState } from 'react';

const TableComponent = () => {
  const [mergedData, setMergedData] = useState([]);

  useEffect(() => {
    // Fetch data from different collections
    const fetchData = async () => {
      const collection1Data = await fetchCollection1Data();
      const collection2Data = await fetchCollection2Data();
     
      // Merge the data into a single array or object
      const mergedData = mergeData(collection1Data, collection2Data);

      // Set the merged data to the state
      setMergedData(mergedData);
    };

    fetchData();
  }, []);

  // Helper function to merge data
  const mergeData = (data1, data2) => {
    // Merge logic based on your data structure
    // Example: Concatenating arrays
    return data1.concat(data2);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
          {/* Add more column headers if needed */}
        </tr>
      </thead>
      <tbody>
        {mergedData.map((item) => (
          <tr key={item.id}>
            <td>{item.column1}</td>
            <td>{item.column2}</td>
            {/* Add more table cells if needed */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;