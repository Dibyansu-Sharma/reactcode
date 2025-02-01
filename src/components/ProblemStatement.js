import React, { useState } from "react";

const ProblemStatement = () => {
  const [showTopics, setShowTopics] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="p-6 bg-white rounded-2xl shadow-md max-w-3xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4 text-center">
        📄 Problem Statement
      </h1>

      <p className="mb-4">
        You are given a tree representing a file system. Each node has the
        following structure:
      </p>
      <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
        {`{
  id: number,
  name: string,
  isFolder: boolean,
  items: [] // array of child nodes
}`}
      </pre>

      <p className="mt-4 mb-2 font-semibold">
        Implement the function in <code>.\src\hooks\use-traverse-tree.js</code>
      </p>
      <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
        {`insertNode(tree, folderId, itemName, isFolder)`}
      </pre>

      <ul className="list-disc pl-6 mb-4">
        <li>
          Insert the new item at the <strong>beginning</strong> of the{" "}
          <code>items</code> array of the target folder.
        </li>
        <li>
          Assign a unique <code>id</code> using{" "}
          <code>new Date().getTime()</code>.
        </li>
        <li>
          Return the updated tree <strong>without mutating</strong> the original
          tree.
        </li>
        <li>
          If <code>folderId</code> is not found or not a folder, return the
          original tree.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">Constraints:</h2>
      <ul className="list-disc pl-6">
        <li>
          The tree depth can be up to <strong>10⁴</strong>.
        </li>
        <li>
          <code>folderId</code> is unique.
        </li>
        <li>The root node is always a folder.</li>
      </ul>

      <button
        onClick={() => setShowTopics(!showTopics)}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        {showTopics ? "Hide Related Topics" : "Show Related Topics"}
      </button>

      {showTopics && (
        <div className="mt-4 bg-gray-50 p-4 rounded-md">
          <h3 className="text-lg font-semibold">📚 Related Topics:</h3>
          <ul className="list-disc pl-6 mt-2">
            <li>Depth-First Search (DFS)</li>
          </ul>
        </div>
      )}

      <button
        onClick={() => setShowSolution(!showSolution)}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
      >
        {showSolution ? "Hide Solution" : "Show Solution"}
      </button>

      {showSolution && (
        <div className="mt-4 bg-gray-50 p-4 rounded-md">
          <h3 className="text-lg font-semibold">💡 Solution:</h3>
          <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
            {`const insertNode = function (tree, folderId, item, isFolder) {
  if (tree.id === folderId && tree.isFolder) {
    tree.items.unshift({
      id: new Date().getTime(),
      name: item,
      isFolder: isFolder,
      items: []
    });
    return tree;
  }

  let latestNode = [];
  latestNode = tree.items.map((ob) => {
    return insertNode(ob, folderId, item, isFolder);
  });

  return { ...tree, items: latestNode };
};`}
          </pre>
        </div>
      )}
    </div>
  );
};

export default ProblemStatement;
