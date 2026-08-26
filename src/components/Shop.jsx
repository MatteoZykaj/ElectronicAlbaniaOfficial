import { useState, useMemo } from 'react'
import { products, categories } from './products.js'
import ProductCard from './ProductCard.jsx'
import ProductModal from './ProductModal.jsx'
import './Shop.css'

function Shop() {
  const [activeCat, setActiveCat] = useState('all')
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState(null)
  const [sort, setSort] = useState('default')

  const filtered = useMemo(function() {
    var list = products.filter(function(p) {
      var matchCat = activeCat === 'all' || p.category === activeCat
      var matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase()) || p.model.toLowerCase().includes(search.toLowerCase())
      return matchCat && matchSearch
    })
    if (sort === 'az') list = list.slice().sort(function(a, b) { return a.name.localeCompare(b.name) })
    if (sort === 'za') list = list.slice().sort(function(a, b) { return b.name.localeCompare(a.name) })
    return list
  }, [activeCat, search, sort])

  var counts = {}
  categories.forEach(function(c) {
    counts[c.id] = c.id === 'all' ? products.length : products.filter(function(p) { return p.category === c.id }).length
  })

  return (
    <section className="shop" id="shop">
      <div className="shop__container">

        <div className="shop__header">
          <span className="shop__label">Katalogu i Produkteve</span>
          <h2 className="shop__title">Produktet <span>Tona</span></h2>
          <p className="shop__desc">Kliko nje produkt per detaje te plota — pastaj dergoje direkt ne WhatsApp per oferte.</p>
        </div>

        <div className="shop__layout">

          <aside className="shop__sidebar">
            <div className="shop__sidebar-title">Kategorite</div>
            <ul className="shop__cats">
              {categories.map(function(c) {
                return (
                  <li key={c.id}>
                    <button
                      className={'shop__cat' + (activeCat === c.id ? ' shop__cat--active' : '')}
                      onClick={function() { setActiveCat(c.id) }}
                    >
                      <span>{c.icon}</span>
                      <span>{c.label}</span>
                      <span className="shop__cat-count">{counts[c.id]}</span>
                    </button>
                  </li>
                )
              })}
            </ul>

            <div className="shop__sidebar-cta">
              <p>Nuk gjeni produktin?</p>
              <a href="https://wa.me/355676749350" target="_blank" rel="noreferrer">
                Na shkruani 💬
              </a>
            </div>
          </aside>

          <div className="shop__main">
            <div className="shop__toolbar">
              <input
                type="text"
                className="shop__search"
                placeholder="Kerko produkt, brand, model..."
                value={search}
                onChange={function(e) { setSearch(e.target.value) }}
              />
              <select
                className="shop__sort"
                value={sort}
                onChange={function(e) { setSort(e.target.value) }}
              >
                <option value="default">Renditja: Default</option>
                <option value="az">Emri: A - Z</option>
                <option value="za">Emri: Z - A</option>
              </select>
              <span className="shop__count">{filtered.length} produkte</span>
            </div>

            {filtered.length === 0 ? (
              <div className="shop__empty">
                <span>🔍</span>
                <p>Nuk u gjet asnje produkt per "{search}"</p>
                <button onClick={function() { setSearch('') }}>Pastro kerkimin</button>
              </div>
            ) : (
              <div className="shop__grid">
                {filtered.map(function(p) {
                  return (
                    <ProductCard
                      key={p.id}
                      product={p}
                      onClick={function() { setSelected(p) }}
                    />
                  )
                })}
              </div>
            )}
          </div>

        </div>
      </div>

      {selected && (
        <ProductModal
          product={selected}
          onClose={function() { setSelected(null) }}
        />
      )}
    </section>
  )
}

export default Shop
