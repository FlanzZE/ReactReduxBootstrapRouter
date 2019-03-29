// A single reducer
export default function reducer(
  state = {
    data: {
      idUser: null,
      name: "Victor Manuel Mexicano",
      properties: [
        {
          id: 1,
          image: "http://placeimg.com/640/480/arch?t=1",
          title: "Casa en las lomas",
          description: "Casa con excelente ubicacion ",
          price: 5000000,
          owner: {
            name: "Victor Manuel Mexicano Mondragon",
            email: "vmmexicano@gmail.com",
            tel: "5551682302"
          },
          place: {
            street: "Av. Paseo de la reforma 805",
            country: "Ciudad de México",
            county: "CDMX",
            state: "Ciudad de mexico",
            city: "Mexico"
          }
        },
        {
          id: 2,
          image: "http://placeimg.com/640/480/arch?t=2",
          title: "Neque porro quisquam est...",
          description:
            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
          price: 5000000,
          owner: {
            name: "Jeffrey ",
            email: "fakeEmail@fake.com",
            tel: "01800000000"
          },
          place: {
            street: "fifth avenue",
            country: "USA",
            county: "Carpenters ville",
            state: "Alabama",
            city: "Chicago"
          }
        },
        {
          id: 3,
          image: "http://placeimg.com/640/480/arch?t=3",
          title: "Neque porro quisquam est...",
          description:
            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
          price: 5000000,
          owner: {
            name: "Jeffrey ",
            email: "fakeEmail@fake.com",
            tel: "01800000000"
          },
          place: {
            street: "fifth avenue",
            country: "USA",
            county: "Carpenters ville",
            state: "Alabama",
            city: "Chicago"
          }
        },
        {
          id: 4,
          image: "http://placeimg.com/640/480/arch?t=4",
          title: "Neque porro quisquam est...",
          description:
            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
          price: 5000000,
          owner: {
            name: "Jeffrey ",
            email: "fakeEmail@fake.com",
            tel: "01800000000"
          },
          place: {
            street: "fifth avenue",
            country: "USA",
            county: "Carpenters ville",
            state: "Alabama",
            city: "Chicago"
          }
        },
        {
          id: 5,
          image: "http://placeimg.com/640/480/arch?t=5",
          title: "Neque porro quisquam est...",
          description:
            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
          price: 5000000,
          owner: {
            name: "Jeffrey ",
            email: "fakeEmail@fake.com",
            tel: "01800000000"
          },
          place: {
            street: "fifth avenue",
            country: "USA",
            county: "Carpenters ville",
            state: "Alabama",
            city: "Chicago"
          }
        },
        {
          id: 6,
          image: "http://placeimg.com/640/480/arch?t=6",
          title: "Neque porro quisquam est...",
          description:
            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
          price: 5000000,
          owner: {
            name: "Jeffrey ",
            email: "fakeEmail@fake.com",
            tel: "01800000000"
          },
          place: {
            street: "fifth avenue",
            country: "USA",
            county: "Carpenters ville",
            state: "Alabama",
            city: "Chicago"
          }
        },
        {
          id: 7,
          image: "http://placeimg.com/640/480/arch?t=7",
          title: "Neque porro quisquam est...",
          description:
            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
          price: 5000000,
          owner: {
            name: "Jeffrey ",
            email: "fakeEmail@fake.com",
            tel: "01800000000"
          },
          place: {
            street: "fifth avenue",
            country: "USA",
            county: "Carpenters ville",
            state: "Alabama",
            city: "Chicago"
          }
        },
        {
          id: 8,
          image: "http://placeimg.com/640/480/arch?t=8",
          title: "Neque porro quisquam est...",
          description:
            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
          price: 5000000,
          owner: {
            name: "Jeffrey ",
            email: "fakeEmail@fake.com",
            tel: "01800000000"
          },
          place: {
            street: "fifth avenue",
            country: "USA",
            county: "Carpenters ville",
            state: "Alabama",
            city: "Chicago"
          }
        },
        {
          id: 9,
          image: "http://placeimg.com/640/480/arch?t=9",
          title: "Neque porro quisquam est...",
          description:
            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
          price: 5000000,
          owner: {
            name: "Jeffrey ",
            email: "fakeEmail@fake.com",
            tel: "01800000000"
          },
          place: {
            street: "fifth avenue",
            country: "USA",
            county: "Carpenters ville",
            state: "Alabama",
            city: "Chicago"
          }
        },
        {
          id: 10,
          image: "http://placeimg.com/640/480/arch?t=10",
          title: "Neque porro quisquam est...",
          description:
            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
          price: 5000000,
          owner: {
            name: "Jeffrey ",
            email: "fakeEmail@fake.com",
            tel: "01800000000"
          },
          place: {
            street: "fifth avenue",
            country: "USA",
            county: "Carpenters ville",
            state: "Alabama",
            city: "Chicago"
          }
        },
        {
          id: 11,
          image: "http://placeimg.com/640/480/arch?t=11",
          title: "Neque porro quisquam est...",
          description:
            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
          price: 5000000,
          owner: {
            name: "Jeffrey ",
            email: "fakeEmail@fake.com",
            tel: "01800000000"
          },
          place: {
            street: "fifth avenue",
            country: "USA",
            county: "Carpenters ville",
            state: "Alabama",
            city: "Chicago"
          }
        },
        {
          id: 12,
          image: "http://placeimg.com/640/480/arch?t=12",
          title: "Neque porro quisquam est...",
          description:
            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
          price: 5000000,
          owner: {
            name: "Jeffrey ",
            email: "fakeEmail@fake.com",
            tel: "01800000000"
          },
          place: {
            street: "fifth avenue",
            country: "USA",
            county: "Carpenters ville",
            state: "Alabama",
            city: "Chicago"
          }
        },
        {
          id: 13,
          image: "http://placeimg.com/640/480/arch?t=13",
          title: "Neque porro quisquam est...",
          description:
            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
          price: 5000000,
          owner: {
            name: "Jeffrey ",
            email: "fakeEmail@fake.com",
            tel: "01800000000"
          },
          place: {
            street: "fifth avenue",
            country: "USA",
            county: "Carpenters ville",
            state: "Alabama",
            city: "Chicago"
          }
        },
        {
          id: 14,
          image: "http://placeimg.com/640/480/arch?t=14",
          title: "Neque porro quisquam est...",
          description:
            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
          price: 5000000,
          owner: {
            name: "Jeffrey ",
            email: "fakeEmail@fake.com",
            tel: "01800000000"
          },
          place: {
            street: "fifth avenue",
            country: "USA",
            county: "Carpenters ville",
            state: "Alabama",
            city: "Chicago"
          }
        },
        {
          id: 15,
          image: "http://placeimg.com/640/480/arch?t=15",
          title: "Neque porro quisquam est...",
          description:
            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
          price: 5000000,
          owner: {
            name: "Jeffrey ",
            email: "fakeEmail@fake.com",
            tel: "01800000000"
          },
          place: {
            street: "fifth avenue",
            country: "USA",
            county: "Carpenters ville",
            state: "Alabama",
            city: "Chicago"
          }
        },
        {
          id: 16,
          image: "http://placeimg.com/640/480/arch?t=16",
          title: "Neque porro quisquam est...",
          description:
            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
          price: 5000000,
          owner: {
            name: "Jeffrey ",
            email: "fakeEmail@fake.com",
            tel: "01800000000"
          },
          place: {
            street: "fifth avenue",
            country: "USA",
            county: "Carpenters ville",
            state: "Alabama",
            city: "Chicago"
          }
        },
        {
          id: 17,
          image: "http://placeimg.com/640/480/arch?t=17",
          title: "Neque porro quisquam est...",
          description:
            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
          price: 5000000,
          owner: {
            name: "Jeffrey ",
            email: "fakeEmail@fake.com",
            tel: "01800000000"
          },
          place: {
            street: "fifth avenue",
            country: "USA",
            county: "Carpenters ville",
            state: "Alabama",
            city: "Chicago"
          }
        },
        {
          id: 18,
          image: "http://placeimg.com/640/480/arch?t=18",
          title: "Neque porro quisquam est...",
          description:
            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
          price: 5000000,
          owner: {
            name: "Jeffrey ",
            email: "fakeEmail@fake.com",
            tel: "01800000000"
          },
          place: {
            street: "fifth avenue",
            country: "USA",
            county: "Carpenters ville",
            state: "Alabama",
            city: "Chicago"
          }
        },
        {
          id: 19,
          image: "http://placeimg.com/640/480/arch?t=19",
          title: "Neque porro quisquam est...",
          description:
            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
          price: 5000000,
          owner: {
            name: "Jeffrey ",
            email: "fakeEmail@fake.com",
            tel: "01800000000"
          },
          place: {
            street: "fifth avenue",
            country: "USA",
            county: "Carpenters ville",
            state: "Alabama",
            city: "Chicago"
          }
        },

        {
          id: 20,
          image: "http://placeimg.com/640/480/arch?t=20",
          title: "Neque porro quisquam est...",
          description:
            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
          price: 5000000,
          owner: {
            name: "Jeffrey ",
            email: "fakeEmail@fake.com",
            tel: "01800000000"
          },
          place: {
            street: "fifth avenue",
            country: "USA",
            county: "Carpenters ville",
            state: "Alabama",
            city: "Chicago"
          }
        },
        {
          id: 21,
          image: "http://placeimg.com/640/480/arch?t=21",
          title: "Neque porro quisquam est...",
          description:
            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
          price: 5000000,
          owner: {
            name: "Jeffrey ",
            email: "fakeEmail@fake.com",
            tel: "01800000000"
          },
          place: {
            street: "fifth avenue",
            country: "USA",
            county: "Carpenters ville",
            state: "Alabama",
            city: "Chicago"
          }
        },
        {
          id: 22,
          image: "http://placeimg.com/640/480/arch?t=22",
          title: "Neque porro quisquam est...",
          description:
            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
          price: 5000000,
          owner: {
            name: "Jeffrey ",
            email: "fakeEmail@fake.com",
            tel: "01800000000"
          },
          place: {
            street: "fifth avenue",
            country: "USA",
            county: "Carpenters ville",
            state: "Alabama",
            city: "Chicago"
          }
        },
        {
          id: 23,
          image: "http://placeimg.com/640/480/arch?t=23",
          title: "Neque porro quisquam est...",
          description:
            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
          price: 5000000,
          owner: {
            name: "Jeffrey ",
            email: "fakeEmail@fake.com",
            tel: "01800000000"
          },
          place: {
            street: "fifth avenue",
            country: "USA",
            county: "Carpenters ville",
            state: "Alabama",
            city: "Chicago"
          }
        },
        {
          id: 24,
          image: "http://placeimg.com/640/480/arch?t=24",
          title: "Neque porro quisquam est...",
          description:
            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
          price: 5000000,
          owner: {
            name: "Jeffrey ",
            email: "fakeEmail@fake.com",
            tel: "01800000000"
          },
          place: {
            street: "fifth avenue",
            country: "USA",
            county: "Carpenters ville",
            state: "Alabama",
            city: "Chicago"
          }
        },
        {
          id: 25,
          image: "http://placeimg.com/640/480/arch?t=25",
          title: "Neque porro quisquam est...",
          description:
            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
          price: 5000000,
          owner: {
            name: "Jeffrey ",
            email: "fakeEmail@fake.com",
            tel: "01800000000"
          },
          place: {
            street: "fifth avenue",
            country: "USA",
            county: "Carpenters ville",
            state: "Alabama",
            city: "Chicago"
          }
        },
        {
          id: 26,
          image: "http://placeimg.com/640/480/arch?t=26",
          title: "Neque porro quisquam est...",
          description:
            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
          price: 5000000,
          owner: {
            name: "Jeffrey ",
            email: "fakeEmail@fake.com",
            tel: "01800000000"
          },
          place: {
            street: "fifth avenue",
            country: "USA",
            county: "Carpenters ville",
            state: "Alabama",
            city: "Chicago"
          }
        },
        {
          id: 27,
          image: "http://placeimg.com/640/480/arch?t=27",
          title: "Neque porro quisquam est...",
          description:
            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
          price: 5000000,
          owner: {
            name: "Jeffrey ",
            email: "fakeEmail@fake.com",
            tel: "01800000000"
          },
          place: {
            street: "fifth avenue",
            country: "USA",
            county: "Carpenters ville",
            state: "Alabama",
            city: "Chicago"
          }
        },
        {
          id: 28,
          image: "http://placeimg.com/640/480/arch?t=28",
          title: "Neque porro quisquam est...",
          description:
            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
          price: 5000000,
          owner: {
            name: "Jeffrey ",
            email: "fakeEmail@fake.com",
            tel: "01800000000"
          },
          place: {
            street: "fifth avenue",
            country: "USA",
            county: "Carpenters ville",
            state: "Alabama",
            city: "Chicago"
          }
        },

        {
          id: 29,
          image: "http://placeimg.com/640/480/arch?t=29",
          title: "Neque porro quisquam est...",
          description:
            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
          price: 5000000,
          owner: {
            name: "Jeffrey ",
            email: "fakeEmail@fake.com",
            tel: "01800000000"
          },
          place: {
            street: "fifth avenue",
            country: "USA",
            county: "Carpenters ville",
            state: "Alabama",
            city: "Chicago"
          }
        },
        {
          id: 30,
          image: "http://placeimg.com/640/480/arch?t=30",
          title: "Neque porro quisquam est...",
          description:
            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
          price: 5000000,
          owner: {
            name: "Jeffrey ",
            email: "fakeEmail@fake.com",
            tel: "01800000000"
          },
          place: {
            street: "fifth avenue",
            country: "USA",
            county: "Carpenters ville",
            state: "Alabama",
            city: "Chicago"
          }
        },
        {
          id: 31,
          image: "http://placeimg.com/640/480/arch?t=31",
          title: "Neque porro quisquam est...",
          description:
            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
          price: 5000000,
          owner: {
            name: "Jeffrey ",
            email: "fakeEmail@fake.com",
            tel: "01800000000"
          },
          place: {
            street: "fifth avenue",
            country: "USA",
            county: "Carpenters ville",
            state: "Alabama",
            city: "Chicago"
          }
        },
        {
          id: 32,
          image: "http://placeimg.com/640/480/arch?t=32",
          title: "Neque porro quisquam est...",
          description:
            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
          price: 5000000,
          owner: {
            name: "Jeffrey ",
            email: "fakeEmail@fake.com",
            tel: "01800000000"
          },
          place: {
            street: "fifth avenue",
            country: "USA",
            county: "Carpenters ville",
            state: "Alabama",
            city: "Chicago"
          }
        },
        {
          id: 33,
          image: "http://placeimg.com/640/480/arch?t=33",
          title: "Neque porro quisquam est...",
          description:
            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..",
          price: 5000000,
          owner: {
            name: "Jeffrey ",
            email: "fakeEmail@fake.com",
            tel: "01800000000"
          },
          place: {
            street: "fifth avenue",
            country: "USA",
            county: "Carpenters ville",
            state: "Alabama",
            city: "Chicago"
          }
        }
      ]
    },
    error: null
  },
  action
) {
  switch (action.type) {
    case "DO_SOMETHING": {
      // returns a copy of the state with new data
      return { state };
    }
    case "SET_NAME": {
      return {
        ...state,
        data: { ...state.data, name: action.payload },
        error: false
      };
    }
    case "SET_OWN_INFO": {
      const filteredObject = state.data.properties.filter(selectedObject => {
        return selectedObject.id == action.payload.id;
      });
      filteredObject[0].owner = action.payload.owner;
      const objectsPropertiesState = state.data.properties.filter(
        selectedObject => {
          return selectedObject.id != action.payload.id;
        }
      );
      objectsPropertiesState.push(filteredObject[0]);

      return {
        ...state,
        data: { ...state.data, properties: objectsPropertiesState },
        error: false
      };
    }
    case "SET_PLACE_INFO": {
      const filteredObject = state.data.properties.filter(selectedObject => {
        return selectedObject.id == action.payload.id;
      });
      filteredObject[0].place = action.payload.place;
      const objectsPropertiesState = state.data.properties.filter(
        selectedObject => {
          return selectedObject.id != action.payload.id;
        }
      );
      objectsPropertiesState.push(filteredObject[0]);

      return {
        ...state,
        data: { ...state.data, properties: objectsPropertiesState },
        error: false
      };
    }
    case "SET_PRICE": {
      const filteredObject = state.data.properties.filter(selectedObject => {
        return selectedObject.id == action.payload.id;
      });
      filteredObject[0].price = action.payload.price;
      const objectsPropertiesState = state.data.properties.filter(
        selectedObject => {
          return selectedObject.id != action.payload.id;
        }
      );
      objectsPropertiesState.push(filteredObject[0]);

      return {
        ...state,
        data: { ...state.data, properties: objectsPropertiesState },
        error: false
      };
    }
  }
  return state;
}
