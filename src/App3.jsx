const tasks = [
  {
    id: "unique_id_001",
    subtitle: "Subtitle",
    // createdAt:'2024-03-27T10:08:35.124Z',
    tags: [
      {
        id: "tag_001",
        text: "Its done",
        icon: "T",
      },
      {
        id: "tag_002",
        text: "Its canceled",
        icon: "X",
      },
      {
        id: "tag_003",
        text: "Its in progress",
        icon: "P",
      },
      {
        id: "tag_004",
        text: "Just wrote this",
        icon: "C",
      },
    ],
    comments: [
      {
        id: "comment_id_001",
        user: {
          avatar: "xyz.com",
          name: "Viraz",
          user_id: "user_id_001",
        },
        text: `Lorem ipsum dolor sit amet consectetur 
                  adipisicing elit. Fugiat modi possimus 
                  corporis tenetur omnis, aliquid harum 
                  consequuntur vel quo eius a recusandae 
                  blanditiis vero odio sint 
                  illum, dolores cupiditate quaerat.`,
      },
    ],
    tasks: [
      {
        id: "task_001",
        title: "Foggy Nelson",
        text: `Here to clearn the strees of Hel's Kitchen`,
        status: "done",
      },
      {
        id: "task_002",
        title: "Louis CK",
        text: `Here to clearn the strees of Hel's Kitchen`,
        status: "This on is cancelled",
      },
    ],
  },
  {
    id: "unique_id_001",
    subtitle: "Subtitle",
    // createdAt:'2024-03-27T10:08:35.124Z',
    tags: [
      {
        id: "tag_001",
        text: "Its done",
        icon: "T",
      },
      {
        id: "tag_002",
        text: "Its canceled",
        icon: "X",
      },
      {
        id: "tag_003",
        text: "Its in progress",
        icon: "P",
      },
      {
        id: "tag_004",
        text: "Just wrote this",
        icon: "C",
      },
    ],
    comments: [
      {
        id: "comment_id_001",
        user: {
          avatar: "xyz.com",
          name: "Viraz",
          user_id: "user_id_001",
        },
        text: `Lorem ipsum dolor sit amet consectetur 
                  adipisicing elit. Fugiat modi possimus 
                  corporis tenetur omnis, aliquid harum 
                  consequuntur vel quo eius a recusandae 
                  blanditiis vero odio sint 
                  illum, dolores cupiditate quaerat.`,
      },
    ],
    tasks: [
      {
        id: "task_001",
        title: "Foggy Nelson",
        text: `Here to clearn the strees of Hel's Kitchen`,
        status: "done",
      },
      {
        id: "task_002",
        title: "Louis CK",
        text: `Here to clearn the strees of Hel's Kitchen`,
        status: "This on is cancelled",
      },
      {
        id: "task_003",
        title: "Albert Einstein",
        text: `Here to clearn the strees of Hel's Kitchen`,
        status: "In progress",
      },
    ],
  },
  {
    id: "unique_id_001",
    subtitle: "Subtitle",
    // createdAt:'2024-03-27T10:08:35.124Z',
    tags: [
      {
        id: "tag_001",
        text: "Its done",
        icon: "T",
      },
      {
        id: "tag_002",
        text: "Its canceled",
        icon: "X",
      },
      {
        id: "tag_003",
        text: "Its in progress",
        icon: "P",
      },
      {
        id: "tag_004",
        text: "Just wrote this",
        icon: "C",
      },
    ],
    comments: [
      {
        id: "comment_id_001",
        user: {
          avatar: "xyz.com",
          name: "Viraz",
          user_id: "user_id_001",
        },
        text: `Lorem ipsum dolor sit amet consectetur 
                  adipisicing elit. Fugiat modi possimus 
                  corporis tenetur omnis, aliquid harum 
                  consequuntur vel quo eius a recusandae 
                  blanditiis vero odio sint 
                  illum, dolores cupiditate quaerat.`,
      },
    ],
    tasks: [
      {
        id: "task_001",
        title: "Foggy Nelson",
        text: `Here to clearn the strees of Hel's Kitchen`,
        status: "done",
      },
      {
        id: "task_002",
        title: "Louis CK",
        text: `Here to clearn the strees of Hel's Kitchen`,
        status: "This on is cancelled",
      },
      {
        id: "task_003",
        title: "Albert Einstein",
        text: `Here to clearn the strees of Hel's Kitchen`,
        status: "In progress",
      },
      {
        id: "task_004",
        title: "Albert Einstein",
        text: `Here to clearn the strees of Hel's Kitchen`,
        status: "In progress",
      },
    ],
  },
];

function getDay() {
  const date = new Date().getDay();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[date];
}

function formateDate() {
  const date = new Date();
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

const TagsListItem = ({ tag }) => {
  return (
    <li key={tag.id} className="p-3 m-3 bg-blue-400 rounded-full hover:bg-sky-700 hover: hover:cursor-pointer ">
      {" "}
      <small className="p-2">{tag.icon}</small> - {tag.text}
    </li>
  );
};

const CommentList = ({ comment }) => {
  return (
    <div key={comment.id}>
      <h4 className="font-serif font-bold text-black ">{comment.user.name}</h4>
      <p>{comment.text}</p>
    </div>
  );
};

const TaskListItem = ({ task }) => {
  return (
    <li key={task.id} className="p-2 m-3 rounded-lg hover:bg-sky-300 hover:cursor-pointer bg-emerald-400">
      <h3 className="font-bold ">{task.title}</h3>
      <p>
        <small>{task.status}</small>
      </p>
      <p>{task.text}</p>
    </li>
  );
};

const TaskCard = ({ task }) => {
  return (
    <div className="p-3 mx-auto rounded-md w-96 bg-slate-300">
      <h1 className="text-3xl ">
        {getDay()},{formateDate()}
      </h1>
      <h3 className="text-gray-500">{task.subtitle}</h3>
      <ul>
        {task.tags.map((tag) => (
          <TagsListItem key={tag.id} tag={tag} />
        ))}
      </ul>
      <div />
      <p>Notes linked to people</p>
      <div className="p-5 ">
        {task.comments.map((comment) => (
          <CommentList key={comment.id} comment={comment} />
        ))}
      </div>
      <ul>
        {task.tasks.map((task) => (
          <TaskListItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};
export default App;
