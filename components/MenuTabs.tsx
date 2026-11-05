"use client";

import { useState } from "react";
import { MENU, MENU_TABS, WHATSAPP_URL, type MenuTab } from "@/lib/data";

export default function MenuTabs() {
  const [tab, setTab] = useState<MenuTab>("Hambúrgueres");
  const items = MENU[tab];

  return (
    <>
      <div className="tabs" role="tablist">
        {MENU_TABS.map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={t === tab}
            className={`tab ${t === tab ? "active" : ""}`}
            onClick={() => setTab(t)}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="menu-list">
        {items.length === 0 ? (
          <div className="menu-empty">
            Consulte as opções de {tab.toLowerCase()} pelo WhatsApp.
          </div>
        ) : (
          items.map((item) => (
            <article key={item.name} className="menu-item">
              <div>
                <h3>
                  {item.name}
                  {item.tag && <span className="pill">{item.tag}</span>}
                </h3>
                <p>{item.description}</p>
              </div>
              <div className="menu-side">
                <strong>{item.price}</strong>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn small"
                >
                  Peça pelo WhatsApp
                </a>
              </div>
            </article>
          ))
        )}
      </div>
    </>
  );
}
