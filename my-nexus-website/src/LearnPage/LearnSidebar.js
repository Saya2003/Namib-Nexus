import React, { useState } from "react";

const sections = [
  {
    id: "intro",
    label: "What is Uranium?"
  },
  {
    id: "section1",
    label: "Section 1: Geological Types of Uranium Deposits",
    children: [
        { id: "types-1", label: "1. Sandstone-Hosted Deposits" },
          { id: "types-2", label: "2. Unconformity-Related Deposits" },
          { id: "types-3", label: "3. Vein-Type Deposits" },
          { id: "types-4", label: "4. Intrusive-Related Deposits" },
          { id: "types-5", label: "5. Breccia Pipe Deposits" },
          { id: "types-6", label: "6. Surficial Deposits" },
          { id: "types-7", label: "7. Phosphorite Deposits (By-Product Uranium)" } 
    ]
  },
  {
    id: "section2",
    label: "Section 2: Uranium Extraction Methods",
    children: [
        { id: "method-1", label: "1. Open-Pit Mining" },
            { id: "method-2", label: "2. Underground Mining" },
            { id: "method-3", label: "3. In-Situ Recovery (ISR)" },
            { id: "method-4", label: "4. Heap Leaching" },
            { id: "method-5", label: "5. By-product Recovery" }   
    ]
  },
  {
    id: "section3",
    label: "Section 3: Sustainable Development Considerations",
    children: [
        { id: "considerations-1", label: "A. Environmental Considerations", 
                children: [
                    { id: "challenge", label: "Challenges"},
                    { id: "mitigate", label: "Mitigation Strategies" }
                ]
             },
            { id: "considerations-2", label: "B. Social Considerations",
                children: [
                    { id: "risk", label: "Risks"},
                    { id: "solution", label: "Solutions"}
                ]
             },
            { id: "considerations-3", label: "C. Economic Considerations",
                children: [
                    { id: "opp", label: "Opportunities"},
                    { id: "risk2", label: "Risks"},
                    { id: "best", label: "Best Practices" }
                ]
             }, 
    ]
  },  
  { id: "conclusion", label: "Conclusion: The Future of Uranium" }
];

function collectAllIds(section) {
  let ids = [section.id];
  if (section.children) {
    section.children.forEach(child => {
      ids = ids.concat(collectAllIds(child));
    });
  }
  return ids;
}

function Section({ section, expandedIds, toggleSection }) {
  const hasChildren = section.children && section.children.length > 0;
  const isExpanded = expandedIds.has(section.id);

  const handleToggle = (e) => {
    e.preventDefault();
    toggleSection(section);
  };

  return (
    <li>
      <a
        href={`#${section.id}`}
        onClick={hasChildren ? handleToggle : undefined}
        className="sidebar-link"
      >
        <span>{section.label}</span>
        {hasChildren && (
          <span className="arrow">{isExpanded ? "▼" : "▶"}</span>
        )}
      </a>

      {hasChildren && isExpanded && (
        <ul style={{ paddingLeft: "1.25rem", marginTop: 4 }}>
          {section.children.map((child) => (
            <Section
              key={child.id}
              section={child}
              expandedIds={expandedIds}
              toggleSection={toggleSection}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

function LearnSidebar() {
  const [expandedIds, setExpandedIds] = useState(new Set());

   // IDs of Section 3 subtopics (for quick check)
  const section3Subtopics = new Set([
    "considerations-1",
    "considerations-2",
    "considerations-3",
  ]);

  // Helper to find if section is a direct child of Section 3
  // (Could also be improved by indexing data structure if large)
  function isDirectChildOfSection3(id) {
    return section3Subtopics.has(id);
  }

  const toggleSection = (section) => {
    const allIds = collectAllIds(section);
    const newExpanded = new Set(expandedIds);

    if (expandedIds.has(section.id)) {
      // Collapse: remove all IDs
      allIds.forEach((id) => newExpanded.delete(id));
    } else {
      if (section.id === "section3") {
        // User toggling entire Section 3 — open it with all children
        newExpanded.clear();
        allIds.forEach((id) => newExpanded.add(id));
      } else if (isDirectChildOfSection3(section.id)) {
        // User toggling a subtopic under Section 3:
        // Keep Section 3 open
        newExpanded.clear();
        newExpanded.add("section3");

        // Add this subtopic and its children
        allIds.forEach((id) => newExpanded.add(id));
      } else {
        // Normal behavior: only one top-level section open at a time
        newExpanded.clear();
        allIds.forEach((id) => newExpanded.add(id));
      }
    }

    setExpandedIds(newExpanded);
  };

  return (
    <nav className="learn-sidebar">
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {sections.map((section) => (
          <Section
            key={section.id}
            section={section}
            expandedIds={expandedIds}
            toggleSection={toggleSection}
          />
        ))}
      </ul>
    </nav>
  );
}


export default LearnSidebar;