import random

import matplotlib.pyplot as plt

improve = 0.9999
# improve = 0
iternb = 1000

t = []
small = []
big = []
weights = [9, 1]
for i in range(iternb):
    t.append(i)
    big.append(sum(random.choices([0, 1], weights=[7, 3], k=i)))
    if improve:
        weights = [weights[0] * improve]
        weights.append(10 - weights[0])
        print(weights)
    small.append(sum(random.choices([0, 1], weights=weights, k=4 * i)))


fig, ax = plt.subplots()
ax.plot(t, small)
ax.plot(t, big)
ax.legend(["Faster decisions", "Better decisions"])

ax.set(xlabel="Iterations", ylabel="Wins")
ax.grid()

fig.savefig("decisions.png")
plt.show()
