function PokeGrowthRate({ growth_rate, level }) {
  const growth_rate_types = {
    slow: {
      name_es: "Lento",
      exp_function: function expInLevel(level) {
        return (5 * level ** 3) / 4;
      },
    },
    medium: {
      name_es: "Medio",
      exp_function: function expInLevel(level) {
        return level ** 3;
      },
    },
    fast: {
      name_es: "Rápido",
      exp_function: function expInLevel(level) {
        return (4 * level ** 3) / 5;
      },
    },
    "medium-slow": {
      name_es: "Parabólico",
      exp_function: function expInLevel(level) {
        return (6 * level ** 3) / 5 - 15 * level ** 2 + 100 * level - 140;
      },
    },
    "slow-then-very-fast": {
      name_es: "Errático",
      exp_function: function expInLevel(level) {
        function p(x) {
          if (x === 0) {
            return 0;
          } else if (x === 1) {
            return 0.008;
          } else if (x === 2) {
            return 0.014;
          }
        }

        if (level >= 0 && level <= 50) {
          return level ** 3 * (2 - 0.02 * level);
        } else if (level >= 51 && level <= 68) {
          return level ** 3 * (1.5 - 0.01 * level);
        } else if (level >= 69 && level <= 98) {
          return level ** 3 * (1.274 - 0.02 * (level / 3) - p(level % 3));
        } else if (level >= 99 && level <= 100) {
          return level ** 3 * (1.6 - 0.01 * level);
        }
      },
    },
    "fast-then-very-slow": {
      name_es: "Fluctuante",
      exp_function: function expInLevel(level) {
        if (level >= 0 && level <= 15) {
          return (level ** 3 * (24 + (level + 1) / 3)) / 50;
        } else if (level >= 16 && level <= 35) {
          return (level ** 3 * (14 + level)) / 50;
        } else if (level >= 36 && level <= 100) {
          return (level ** 3 * (32 + level / 2)) / 50;
        }
      },
    },
  };

  const expFunction = growth_rate_types[growth_rate].exp_function;

  const formatNumber = (number) => {
    return new Intl.NumberFormat('es').format(number);
  };

  return (
    <div>
      <p className="ml-1">
        { isNaN(level) ? "" : formatNumber(expFunction(level))} ({growth_rate_types[growth_rate].name_es})
      </p>
    </div>
  );
}

export default PokeGrowthRate;
