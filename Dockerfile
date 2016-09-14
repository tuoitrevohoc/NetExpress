FROM microsoft/dotnet

RUN mkdir -p /dotnetapp
COPY . /dotnetapp

WORKDIR /dotnetapp/src/NetExpress
RUN dotnet restore

ENTRYPOINT ["dotnet", "run"]

