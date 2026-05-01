                    <p className="text-sm text-slate-500">Total</p>
                    <p className="mt-1 text-2xl font-semibold">$58.00</p>
                  </div>
                  <button className="rounded-full bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600" type="button">
                    Checkout
                  </button>
                </div>
              </div>
            </motion.div>
          </section>

          <section id="menu" className="pt-24">
            <motion.div {...motionProps} className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">Popular menu</p>
                <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-slate-950">Balanced plates and comfort favorites, all in one clean feed.</h2>
              </div>
              <a className="text-sm font-semibold text-slate-700 transition hover:text-orange-600" href="#steps">
                See how delivery works
              </a>
            </motion.div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {foodCards.map((card, index) => (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="overflow-hidden rounded-[2rem] border border-orange-100 bg-white shadow-soft"
                >
                  <div className={`h-56 bg-gradient-to-br ${card.accent}`} />
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-4">
                      <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
                        {card.tag}
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-slate-600">
                        <StarIcon className="h-4 w-4" />
                        {card.rating}
                      </span>
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-slate-950">{card.title}</h3>
                    <p className="mt-3 text-slate-600">{card.description}</p>
                    <div className="mt-6 flex items-center justify-between">
                      <p className="text-xl font-semibold text-slate-950">{card.price}</p>
                      <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600" type="button">
                        Add to order
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          <section id="steps" className="pt-24">
            <motion.div {...motionProps} className="rounded-[2.5rem] border border-slate-200/70 bg-white px-6 py-8 shadow-soft sm:px-8 sm:py-10">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">How it works</p>
                <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-slate-950">Three simple steps between a craving and a finished meal.</h2>
              </div>

              <div className="mt-10 grid gap-5 lg:grid-cols-3">
                {steps.map(({ title, description, icon: Icon }, index) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: index * 0.1 }}
                    className="rounded-[2rem] bg-slate-50 p-6"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white">
                      <Icon className="h-7 w-7" />
                    </div>
                    <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">0{index + 1}</p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-slate-950">{title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          <section id="testimonials" className="pt-24">
            <motion.div {...motionProps} className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">Testimonials</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-slate-950">People come back for the convenience and stay for the quality.</h2>
            </motion.div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <motion.article
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-[2rem] border border-slate-200/80 bg-white p-6 shadow-soft"
                >
                  <div className="flex gap-1 text-orange-500">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <StarIcon key={starIndex} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="mt-5 text-lg leading-8 text-slate-700">"{testimonial.quote}"</p>
                  <div className="mt-8">
                    <p className="font-semibold text-slate-950">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>
        </main>

        <footer
          id="footer"
          className="mt-8 rounded-[2.5rem] border border-slate-200/70 bg-slate-950 px-6 py-8 text-white sm:px-8 sm:py-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-orange-300">FoodFast</p>
              <h2 className="mt-4 max-w-lg text-4xl font-semibold tracking-[-0.04em]">Minimal ordering, memorable meals, and delivery that feels reliable.</h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Explore</p>
                <div className="mt-4 space-y-3 text-slate-200">
                  {navLinks.map((link) => (
                    <a key={link.label} className="block transition hover:text-orange-300" href={link.href}>
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Contact</p>
                <div className="mt-4 space-y-3 text-slate-200">
                  <p>hello@foodfast.example</p>
                  <p>Open daily, 10:00 AM to 11:00 PM</p>
                  <Link className="inline-flex items-center gap-2 text-orange-300 transition hover:text-orange-200" to="/signup">
                    Create your account
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}